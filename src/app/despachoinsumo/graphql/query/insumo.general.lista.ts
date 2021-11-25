import { Injectable } from '@angular/core'
import { gql, Query } from 'apollo-angular'
import { IInsumoObraModel } from 'src/app/core/globalservice/ejecucion.obra/models/insumo.models'


@Injectable({
  providedIn: 'root',
})
export class InsumoGeneralListaGQL extends Query<IInsumoObraModel[] > {
  document = gql`
    query {
        listarInsumos{
                id,
                umedida,
                categoria,
                insumo,
            }
        } 
    
  `
}