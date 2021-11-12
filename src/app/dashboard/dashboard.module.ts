import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ShellDashboardComponent } from './shell.dashboard/shell.dashboard.component';
import { ObraResolveRoute } from './resolversrouters/obra.resolve.route';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ObraService } from '../core/globalservice/obra.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import { MenuizquierdoComponent } from './menuizquierdo/menuizquierdo.component';

@NgModule({
  declarations: [
    ShellDashboardComponent,
    MenuizquierdoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    NgxSpinnerModule
    

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
  
})
export class DashboardModule { }
