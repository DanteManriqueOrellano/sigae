import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import {  Subscription } from 'rxjs';
import { BuscaByIdEjecucionObraServiceGQL } from 'src/app/core/globalservice/ejecucion.obra/graphql/queries/buscaById.ejecucion.obra.serviceGQL';
import { ListServicesEjecucionObraGQL } from 'src/app/core/globalservice/ejecucion.obra/graphql/services/list.services.ejecucion.obraGQL';
import { IEjecucionObraModel } from 'src/app/core/globalservice/ejecucion.obra/models/ejecucion.obra.model';


import { ViewChild  } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart } from '@angular/router';


 /*Reemplazar estos valores con valores reales */
 





@Component({
  selector: 'app-shell.dashboard',
  templateUrl: './shell.dashboard.component.html',
  styleUrls: ['./shell.dashboard.component.css'],
  providers:[ListServicesEjecucionObraGQL]
})
export class ShellDashboardComponent implements OnDestroy {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
 

  loading = false;
  title = 'angu-res';

  /*Reemplazar estos valores con valores reales */
  

  
  subs:Subscription
  id:string | null
  alias:string

  constructor(
    private observer: BreakpointObserver,
    private router:Router,
    private route:ActivatedRoute,
    private ejecucionObraServiceGQL:ListServicesEjecucionObraGQL,
    private busca:BuscaByIdEjecucionObraServiceGQL,
    public spinner: NgxSpinnerService,
    ) {
      this.spinner.show()
      this.router.events.subscribe(ev => {
        if (ev instanceof NavigationStart) {
          this.loading = true;
        }
        if (ev instanceof NavigationEnd || ev instanceof NavigationCancel || ev instanceof NavigationError) {
          this.loading = false;
        }
      });
      
   

  }
  ngOnDestroy(): void {
  
   this.subs.unsubscribe()
    
  }

  
    
  

 goToInsumo(){
   this.router.navigate(['/insumo'])
 }
 ngAfterViewInit() {
  this.observer
    .observe(['(max-width: 800px)'])
    .pipe(delay(1))
    .subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    this.id = this.route.snapshot.paramMap.get("id")//trae de la interfaz anterior
    
    this.subs = this.ejecucionObraServiceGQL.buscaobraById(this.busca.document,{id:this.id}).subscribe((val:any)=>{
      const obra = val.buscaUnaEjecucionObra
      this.alias = obra.alias
      this.spinner.hide()
      
    })
}
    
  
  
  
 

}
