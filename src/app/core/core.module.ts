import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeModule } from '../home/home.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { DespachoinsumoModule } from '../despachoinsumo/despachoinsumo.module';
import { ShellComponent } from './shell/shell.component';


@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HomeModule,
    DashboardModule,
    DespachoinsumoModule
  ],
  exports:[ShellComponent]
})
export class CoreModule { }
