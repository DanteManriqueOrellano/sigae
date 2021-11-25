import { Injectable } from '@angular/core'
import { gql, Mutation } from 'apollo-angular'

@Injectable({
  providedIn: 'root',
})
export class AgregaDespachoGQL extends Mutation{//<{ejecucionobraresponse: EjecucionObraResponse},IEjecucionObraModel> {//<response,request_variables
  document = gql`
 mutation AGREGA_DESPACHO(
  	$id:ID!,
    $nroDespacho:String!,
    $nroRequerimiento:String!,
    $fechaPedido:String!,
    $fechaDespacho:String!,
    $despachoinsumo:[DespachoInsumoInput!]!,
  	$idEjecucionObra:String!
  
){
  agregarDespacho(
    id:$id,
    nroDespacho:$nroDespacho,
    nroRequerimiento:$nroRequerimiento,
    fechaPedido:$fechaPedido,
    fechaDespacho:$fechaDespacho,
    despachoinsumo:$despachoinsumo,
    idEjecucionObra:$idEjecucionObra
  ){
    id
  }
}

    `
}