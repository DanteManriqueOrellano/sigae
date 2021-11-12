import { Injectable } from '@angular/core'
import { gql, Query } from 'apollo-angular'
import { IEjecucionObraModel } from '../../models/ejecucion.obra.model'

@Injectable({
  providedIn: 'root',
})
export class ListaEjecucionObraServiceGQL extends Query<IEjecucionObraModel[] > {
  document = gql`
    query {
  listaEjecucionObra{
    id
    nombrecompletoobra
    alias
  }
  
}
  `
}