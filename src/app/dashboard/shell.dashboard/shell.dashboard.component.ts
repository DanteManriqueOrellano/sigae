import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mutation } from 'apollo-angular';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, Observer, Subscriber } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { NuevoEjecucionObraServiceGQL } from 'src/app/core/globalservice/ejecucion.obra/graphql/mutations/nuevo.ejecucion.obra.serviceGQL';
import { BuscaByIdEjecucionObraServiceGQL } from 'src/app/core/globalservice/ejecucion.obra/graphql/queries/buscaById.ejecucion.obra.serviceGQL';
import { ListServicesEjecucionObraGQL } from 'src/app/core/globalservice/ejecucion.obra/graphql/services/list.services.ejecucion.obraGQL';
import { IEjecucionObraModel } from 'src/app/core/globalservice/ejecucion.obra/models/ejecucion.obra.model';
import { LoadingService } from 'src/app/core/globalservice/LoadingService';
import { ObraService, Persona, Product } from 'src/app/core/globalservice/obra.service';
import { EObra } from 'src/app/core/models/obra';

@Component({
  selector: 'app-shell.dashboard',
  templateUrl: './shell.dashboard.component.html',
  styleUrls: ['./shell.dashboard.component.scss'],
  providers:[ListServicesEjecucionObraGQL]
})
export class ShellDashboardComponent implements OnInit,OnDestroy {

  
  subs:Subscriber<IEjecucionObraModel>
  id:string | null
  data:IEjecucionObraModel

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private ejecucionObraServiceGQL:ListServicesEjecucionObraGQL,
    private busca:BuscaByIdEjecucionObraServiceGQL,
    public spinner: NgxSpinnerService,
    ) {
      this.spinner.show() 
      
    
    //this.ejecucionObra = this.route.snapshot.data['aliasRouteObra'];
    
   

  }
  ngOnDestroy(): void {
    this.subs.complete()
    this.subs.unsubscribe()
    
  }

  ngOnInit(): void {
    this.spinner.hide()
    this.id = this.route.snapshot.paramMap.get("id")//trae de la interfaz anterior
    console.log(this.id)
    this.ejecucionObraServiceGQL.buscaobraById(this.busca.document,{id:this.id}).subscribe((val:any)=>{
      console.log(val.buscaUnaEjecucionObra)
      

    })
    
  }
  
  
 

}
