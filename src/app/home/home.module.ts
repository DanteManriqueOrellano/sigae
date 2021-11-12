import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeListaexpedientesComponent } from './home.lista.expediente/listaexpediente.component';
import { HomeListaobrasComponent } from './home.lista.obras/listaobras.component';
import { HomeListamodulotrabajoComponent } from './home.lista.modulo.trabajo/listamodulotrabajo.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    HomeListaexpedientesComponent,
    HomeListaobrasComponent,
    HomeListamodulotrabajoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    NgxSpinnerModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
