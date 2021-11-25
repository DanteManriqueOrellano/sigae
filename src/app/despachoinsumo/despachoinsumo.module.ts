import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespachoinsumoRoutingModule } from './despachoinsumo-routing.module';
import { EditcantidaddespachoComponent } from './editcantidaddespacho/editcantidaddespacho.component';
import { PreviewdespachoComponent } from './previewdespacho/previewdespacho.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';

import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select'

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {NgxPrintModule} from 'ngx-print';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { NgxSpinnerModule } from "ngx-spinner";
import { EditcantidaddespachohelpComponent } from './editcantidaddespacho/editcantidaddespachohelp/editcantidaddespachohelp.component';
import { BuscaproductoComponent } from './buscaproducto/buscaproducto.component';
import { DialoghelpComponent } from './buscaproducto/dialoghelp/dialoghelp.component';




@NgModule({
  declarations: [
    EditcantidaddespachoComponent,
    PreviewdespachoComponent,
    EditcantidaddespachohelpComponent,
    BuscaproductoComponent,
    DialoghelpComponent
  ],
  imports: [
    CommonModule,
    DespachoinsumoRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    NgxSpinnerModule,
    /*modulos adicionales*/ 
    SatPopoverModule,
    NgxPrintModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    
    MatSnackBarModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,

    MatPaginatorModule,
    LayoutModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule



















  ],
  schemas:	[CUSTOM_ELEMENTS_SCHEMA],
  entryComponents:[EditcantidaddespachoComponent],
  
})
export class DespachoinsumoModule { }
