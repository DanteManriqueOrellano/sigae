import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { LoadingService } from 'src/app/core/globalservice/LoadingService';
import { ObraService } from 'src/app/core/globalservice/obra.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ListServicesEjecucionObraGQL } from 'src/app/core/globalservice/ejecucion.obra/graphql/services/list.services.ejecucion.obraGQL';
import { IEjecucionObraModel } from 'src/app/core/globalservice/ejecucion.obra/models/ejecucion.obra.model';
@Component({
  selector: 'app-listaobras',
  templateUrl: './listaobras.component.html',
  styleUrls: ['./listaobras.component.scss']
})
export class HomeListaobrasComponent implements OnInit{
 
  loading = false;
  obras$:Observable<IEjecucionObraModel[]>

  constructor(private router:Router,private route:ActivatedRoute,private spinner: NgxSpinnerService,private obrasServiceGQL:ListServicesEjecucionObraGQL) { 
    /*this.router.events.subscribe(ev => {
      if (ev instanceof NavigationStart) {
        this.loading = true;
      }
      if (ev instanceof NavigationEnd || ev instanceof NavigationCancel || ev instanceof NavigationError) {
        this.loading = false;
      }
    });*/
    this.obras$ = this.obrasServiceGQL.listaEjecucionObra()
    }
  ngOnInit(){
     /** spinner starts on init */
     this.spinner.show();

     setTimeout(() => {
       /** spinner ends after 5 seconds */
       this.spinner.hide();
     }, 5000);
  }

 


}
