import { Injectable } from '@angular/core'
import { gql, Query } from 'apollo-angular'
import { IEjecucionObraModel } from '../../models/ejecucion.obra.model'

@Injectable({
  providedIn: 'root',
})
export class BuscaByIdEjecucionObraServiceGQL extends Query<IEjecucionObraModel> {
  document = gql`
  query BUSCA_OBRA_POR_ID($id:String!){
  buscaUnaEjecucionObra(id:$id){
    nombrecompletoobra,
    alias
  }
}
  

  `
}