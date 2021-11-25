import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { share, take, tap } from 'rxjs/operators';
import {Apollo,gql} from "apollo-angular"
import { IInsumoObraModel } from 'src/app/core/globalservice/ejecucion.obra/models/insumo.models';

const QUERY = gql `
query {
    listarInsumos {
      id,
      umedida,
      categoria,
      insumo
    }
    
  }
`


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

    private readonly loading = new BehaviorSubject<boolean>(false);
    readonly isLoading = this.loading.asObservable().pipe(share());
  
    private sharingObservablePrivate:BehaviorSubject<IInsumoObraModel[]> = new BehaviorSubject<IInsumoObraModel[]>([]);
    
    get sharingConvertObservable(){
        return this.sharingObservablePrivate.asObservable()
    }
    set sharingObservableEmitData(data:IInsumoObraModel[]){
        console.log("desde emit")
            this.sharingObservablePrivate.next(data) 
    }
    constructor(private apollo:Apollo){
        this.getPersonas()
    }

    getPersonas(){//importante que retorne 
      this.startLoading()
        return this.apollo.watchQuery<any>({
            query:QUERY
          }).valueChanges
          .pipe(
            take(1),
            tap( ({data, loading,networkStatus}) => {
                
                this.stopLoading()
              
                const listarInsumos = data;
                
                this.sharingObservableEmitData = listarInsumos.listarInsumos
             
            })).subscribe()
        
    }
    private startLoading() {
      requestAnimationFrame(() => this.loading.next(true));
    }
  
    private stopLoading() {
      requestAnimationFrame(() => this.loading.next(false));
    }
}