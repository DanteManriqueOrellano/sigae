import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { ListServicesEjecucionObraGQL } from "src/app/core/globalservice/ejecucion.obra/graphql/services/list.services.ejecucion.obraGQL";
import { IEjecucionObraModel } from "src/app/core/globalservice/ejecucion.obra/models/ejecucion.obra.model";
import { IInsumoObraModel } from "src/app/core/globalservice/ejecucion.obra/models/insumo.models";
import { InsumoGeneralListaGQL } from "../../graphql/query/insumo.general.lista";
import { ServicesDespachoInsumoGQL } from "../../graphql/services.despachoinsumo.gql";


@Injectable({
    providedIn:'root',
    
})
export class ListaInsumosBaseResolver implements Resolve<Observable<any>> {

    constructor(private insumoGeneralLista:InsumoGeneralListaGQL) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.insumoGeneralLista.fetch()
    }
    

    
}