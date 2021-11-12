import { Injectable } from '@angular/core'
import { gql, Mutation, Query } from 'apollo-angular'
import { EjecucionObraResponse, IEjecucionObraModel, NuevoEjecucionObraInputVariables } from '../../models/ejecucion.obra.model'

@Injectable({
  providedIn: 'root',
})
export class NuevoEjecucionObraServiceGQL extends Mutation{//<{ejecucionobraresponse: EjecucionObraResponse},IEjecucionObraModel> {//<response,request_variables
  document = gql`
 mutation AGREGA_EJECUCION_OBRA($id:ID!,$nombrecompletoobra:String!,$alias:String!)
 {
  agregaEjecucionObra(
    id:$id,
    nombrecompletoobra:$nombrecompletoobra,
    alias:$alias,
    ){
      id
      nombrecompletoobra
      alias
    
    
  }
}


    `
}

/**
 * 
 * mutation AGREGA_EJECUCION_OBRA($id:ID!,$nombrecompletoobra:String!,$alias:String!)
 {
  agregaEjecucionObra(
    id:$id,
    nombrecompletoobra:$nombrecompletoobra,
    alias:$alias,
    ){
    alias
  }
}
 */