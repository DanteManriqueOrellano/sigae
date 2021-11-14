import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Observable, observable, Subscriber } from 'rxjs';
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
export class HomeListaobrasComponent implements OnInit,OnDestroy{
 
  loading = false;
  subs:Subscriber<IEjecucionObraModel[]>
  obras:IEjecucionObraModel[]

  constructor(private router:Router,private route:ActivatedRoute,public spinner: NgxSpinnerService,private obrasServiceGQL:ListServicesEjecucionObraGQL) { 
    
    this.obrasServiceGQL.listaEjecucionObra().subscribe((val:any)=>{
      this.obras = val.listaEjecucionObra
      console.log(val)
      this.spinner.hide()
    })
    }
  ngOnDestroy(): void {
    this.subs.complete();
    this.subs.unsubscribe();
    
  }
  ngOnInit(){
     /** spinner starts on init */
     this.spinner.show();

     
  }

 


}
