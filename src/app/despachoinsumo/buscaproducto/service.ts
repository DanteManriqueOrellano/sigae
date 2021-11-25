import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//este servicio sirve para habilitar y desabilitar los botones del cuadreo de dialogo
@Injectable({
  providedIn: 'root',
})
export class StateService {
  private isAsyncOperationRunning$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);//se inicializa con [disabled]=false
  private animal$: BehaviorSubject<string> = new BehaviorSubject<string>("false");//se inicializa animal ="hola"
  
  
  get sharingConvertObservable(){
    return this.isAsyncOperationRunning$.asObservable()
  }
  set sharingObservableEmitData(data:boolean){
    console.log("el sevicio dialog")
        this.isAsyncOperationRunning$.next(data) 
  }

  get animalConvertObservable(){
    return this.animal$.asObservable()
  }
  set animalObservableEmitData(data:string){
    console.log("el sevicio animal")
        this.animal$.next(data) 
  }

}