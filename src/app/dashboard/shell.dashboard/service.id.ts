import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable(
  {
    providedIn:'root'
  }
)
export class ServiceIdFromObra {
    private obraID:BehaviorSubject<string> = new BehaviorSubject<string>('')
    constructor(){}

    get(){
        return this.obraID.asObservable()
    }
    set(id:string){
        this.obraID.next(id)
    }
 
}