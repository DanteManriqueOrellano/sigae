import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ShellDashboardComponent } from './shell.dashboard/shell.dashboard.component';
import { ObraResolveRoute } from './resolversrouters/obra.resolve.route';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ObraService } from '../core/globalservice/obra.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgxSpinnerModule } from "ngx-spinner";
import { MenuizquierdoComponent } from './menuizquierdo/menuizquierdo.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';



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
    MatSidenavModule,
    NgxSpinnerModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
  
})
export class DashboardModule { }
