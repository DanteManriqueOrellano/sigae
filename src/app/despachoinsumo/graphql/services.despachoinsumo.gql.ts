import { Injectable } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'

import { BehaviorSubject, Observable } from 'rxjs'
import { map, share, take, tap } from 'rxjs/operators'
import { IInsumoObraModel } from 'src/app/core/globalservice/ejecucion.obra/models/insumo.models'
import { IInsumoDespachoModel } from 'src/app/core/globalservice/ejecucion.obra/models/insumos.obra.models'
import { AgregaDespachoGQL } from './mutation/agrega.despacho'
import { InsumoGeneralListaGQL } from './query/insumo.general.lista'

const AGREGA_DESPACHO = gql`


mutation AGREGA_DESPACHO{
  agregarDespacho(
    id:"",
    nroDespacho:"",
    nroRequerimiento:"",
    fechaPedido:"",
    fechaDespacho:"",
    idEjecucionObra:"",
    despachoinsumo:[
      {	id:"",
      	insumo:"",
     		umedida:"",
      	cantidad:0,
      	categoria:""
    	}
    ]){
    id
  }
}

  
`

@Injectable(
  {
    providedIn:'root'
  }
)
export class ServicesDespachoInsumoGQL {
  constructor(
    private apollo:Apollo,
    private insumoGeneralLista:InsumoGeneralListaGQL,
    private agregaDespacho:AgregaDespachoGQL
  ){

  }
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
  

  agregar({id,despachoinsumo,fechaDespacho,fechaPedido,idEjecucionObra,nroDespacho,nroRequerimiento}:IInsumoDespachoModel){

      
    
      return this.agregaDespacho.mutate(
        {
          "id":id,
          "nroDespacho":nroDespacho,
          "nroRequerimiento":nroRequerimiento,
          "fechaPedido":fechaPedido,
          "fechaDespacho":fechaDespacho,
          "idEjecucionObra":idEjecucionObra,
          "despachoinsumo":despachoinsumo
        },
        /*{
            update:(store,{data}:any)=>{
                //get the slice of the cache
                console.log(data)
                const state:any= store.readQuery({
                    query:this.agregaDespacho.document
                })
                
                const updatedState = {
                    
                  listarDespachos: [...state.listarDespachos,data.agregarDespacho],
                  }
                  
                 

                // Update cache
                store.writeQuery({
                    query: this.agregaDespacho.document,
                    data: updatedState,
                })

            }
         }*/
         )
  }

  listaInsumosObra():Observable<IInsumoObraModel[]>
  {    
    return this.insumoGeneralLista
    .watch()
    .valueChanges
    .pipe(
      map((result)=>{
        this.sharingObservableEmitData = result.data
        return result.data
      })
    )
                                        
  }
  buscaobraById<T>(query:any,variables:{}):Observable<T>{
    //return this.buscaEjecucionObraById.watch().valueChanges.pipe(map((result)=>result.data))
    
      return this.apollo.watchQuery<T>({
        query,
        variables
      })
        .valueChanges.pipe(
          map(({data}) => data)
        );
    
  }
 /* private startLoading() {
    requestAnimationFrame(() => this.loading.next(true));
  }

  private stopLoading() {
    requestAnimationFrame(() => this.loading.next(false));
  }
  */
  
}
