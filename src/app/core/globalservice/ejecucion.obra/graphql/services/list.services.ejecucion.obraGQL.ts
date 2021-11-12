import { Injectable } from '@angular/core'
import { Mutation, Query } from 'apollo-angular'

import { Observable } from 'rxjs'
import { map, take, tap } from 'rxjs/operators'
import { EjecucionObraResponse, IEjecucionObraModel } from '../../models/ejecucion.obra.model'

import { NuevoEjecucionObraServiceGQL } from '../mutations/nuevo.ejecucion.obra.serviceGQL'
import { ListaEjecucionObraServiceGQL } from '../queries/lista.ejecucion.obra.serviceGQL'


@Injectable(
  {
    providedIn:'root'
  }
)
export class ListServicesEjecucionObraGQL {
  constructor(
    private nuevoEjecucionObraService:NuevoEjecucionObraServiceGQL,
    private listaEjecucionObraService:ListaEjecucionObraServiceGQL
  ){

  }
  

  agregar({id,nombrecompletoobra,alias}:IEjecucionObraModel){
   
      return this.nuevoEjecucionObraService.mutate({id,nombrecompletoobra,alias},
        {
            update:(store,{data}:any)=>{
                //get the slice of the cache
                const state:any= store.readQuery({
                    query:this.listaEjecucionObraService.document
                })
                
                const updatedState = {
                    
                    listaEjecucionObra: [...state.listaEjecucionObra,data.agregaEjecucionObra],
                  }
                  
                 

                // Update cache
                store.writeQuery({
                    query: this.listaEjecucionObraService.document,
                    data: updatedState,
                })

            }
         })
  }
  listaEjecucionObra():Observable<IEjecucionObraModel[]>
  {
    return this.listaEjecucionObraService.watch()
    .valueChanges.pipe(
      map((result)=>result.data)
    )//.subscribe()
                                            
                                          
               


  }
  
}