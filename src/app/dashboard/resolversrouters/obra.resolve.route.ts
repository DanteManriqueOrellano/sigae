import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ObraService, Persona, Product } from "src/app/core/globalservice/obra.service";
import { EObra } from "src/app/core/models/obra";

@Injectable({
    providedIn:'root'
})
export class ObraResolveRoute implements Resolve<Product[]> {

    
    

    constructor(private obraService:ObraService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product[] | Observable<Product[]> | Promise<Product[]> {
        return this.obraService.getProducts();
    }
    

    
}