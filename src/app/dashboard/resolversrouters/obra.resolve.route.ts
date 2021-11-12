import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ListServicesEjecucionObraGQL } from "src/app/core/globalservice/ejecucion.obra/graphql/services/list.services.ejecucion.obraGQL";
import { IEjecucionObraModel } from "src/app/core/globalservice/ejecucion.obra/models/ejecucion.obra.model";
import { ObraService, Persona, Product } from "src/app/core/globalservice/obra.service";
import { EObra } from "src/app/core/models/obra";

@Injectable({
    providedIn:'root',
    
})
export class ObraResolveRoute implements Resolve<IEjecucionObraModel[]> {

    
    

    constructor(private obraService: ListServicesEjecucionObraGQL) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEjecucionObraModel[]> {
        return this.obraService.listaEjecucionObra();
    }
    

    
}