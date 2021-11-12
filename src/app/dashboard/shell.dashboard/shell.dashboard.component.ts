import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mutation } from 'apollo-angular';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { NuevoEjecucionObraServiceGQL } from 'src/app/core/globalservice/ejecucion.obra/graphql/mutations/nuevo.ejecucion.obra.serviceGQL';
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
export class ShellDashboardComponent implements OnInit {

  
  products: Product[];
  ejecucionobramodel: IEjecucionObraModel = {
    id: '',
    nombrecompletoobra: '',
    alias: ''
  }

  data$:Observable<IEjecucionObraModel[]>
  data1:any
  constructor(private router:Router,private route:ActivatedRoute,public readonly service: ObraService,private ejecucionObraServiceGQL:ListServicesEjecucionObraGQL) { 
    
    this.products = this.route.snapshot.data['aliasRouteObra'];
    
   

  }

  ngOnInit(): void {
    //this.id = this.route.snapshot.paramMap.get("id")//trae de la interfaz anterior
    this.ejecucionObraServiceGQL.listaEjecucionObra().subscribe((val:any)=>{
      this.data1 = val.listaEjecucionObra
      

    })
  }
  addObra(){
    this.ejecucionObraServiceGQL.agregar({id:"",nombrecompletoobra:"dos",alias:"tres"})
      
      .pipe(
        first(),
        tap(() => (this.ejecucionobramodel))
      )
      .subscribe()
  }
 

}
