import { Injectable } from '@angular/core';

import {Apollo,gql,QueryRef} from "apollo-angular"
import { BehaviorSubject, Subscription } from 'rxjs';
import { map, share, take, tap } from 'rxjs/operators';
import { IInsumoObraModel } from './ejecucion.obra/models/insumo.models';


export interface Product {
  id: string,
  name: string,
  price: string,
  description: string
}



export interface Persona{
  nombre:string;
}
const QUERY = gql `
query {
  listarInsumos {
    insumo
  }
  
}
`
const MUTATION = gql `
mutation AGREGA_INSUMO($id:ID!,$insumo:String!,$precio:Float!,$umedida:u_medida!,$categoria:String!)
 {
  agregarInsumo(
    id:$id,
    insumo:$insumo,
    precio:$precio,
    umedida:$umedida,
    categoria:$categoria
    ){
    insumo
  }
}
`

@Injectable({
  providedIn: 'root'
})
export class ObraService {
 
  private readonly loading = new BehaviorSubject<boolean>(false);
  readonly isLoading = this.loading.asObservable().pipe(share());
  private insumosSubject:BehaviorSubject<IInsumoObraModel[]> = new BehaviorSubject<IInsumoObraModel[]>([]);
  private insumosSubject1:BehaviorSubject<Persona[]> = new BehaviorSubject<Persona[]>([]);
  
  get obraToObservable(){
    return this.insumosSubject.asObservable()
  }
  set obraEmitData(data:IInsumoObraModel[]){
    this.insumosSubject.next(data)
    this.insumosSubject.complete()
  }


  get personaToObservable(){
    return this.insumosSubject1.asObservable()
  }
  set personaEmitData(data:Persona[]){
    this.startLoading()
    setTimeout(()=>{
      this.insumosSubject1.next(data)
      this.insumosSubject1.complete()
      this.stopLoading()
    },3000)
    
  }

   
  constructor(private apollo:Apollo) { 
    //this.getInsumos()
    this.getPersonas()
  }
   
  getInsumos():any{
     this.startLoading()
     return this.apollo.watchQuery<any>({ //add return??
      query:QUERY
    }).valueChanges
    .pipe(
      take(1),
      tap( ({data, loading }) => {
        this.stopLoading()
        const listarInsumos = data;
        this.obraEmitData=listarInsumos.listarInsumos;
        
       
      })
    ).subscribe()  
  }

  getPersonas(){
    return this.personaEmitData = PERSONAS


  }

  private startLoading() {
    requestAnimationFrame(() => this.loading.next(true));
  }

  private stopLoading() {
    requestAnimationFrame(() => this.loading.next(false));
  }
  getProducts(): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            "id": "0909011e-ff84-4b47-8aa0-e26acbd9e9a9",
            "name": "Handmade Steel Chair",
            "price": "861.00",
            "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support"
          },
          {
            "id": "3371afb4-7b3b-4248-b464-fff34faf16d0",
            "name": "Fantastic Plastic Car",
            "price": "519.00",
            "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016"
          },
          {
            "id": "9332ce09-5d2c-46b3-9edc-184176ec31fc",
            "name": "Refined Plastic Bike",
            "price": "533.00",
            "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit"
          },
          {
            "id": "c3a8b456-3dc2-4151-abe3-1dd79aba0adb",
            "name": "Gorgeous Frozen Fish",
            "price": "497.00",
            "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive"
          },
          {
            "id": "7e760fb1-c0f8-4cfb-b4df-4b727955f8a2",
            "name": "Generic Granite Bike",
            "price": "26.00",
            "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive"
          }
        ])
      }, 3000)
    })
  }

}

const PERSONAS:Persona[]=[{nombre:"uno"},{nombre:"dos"}]


