import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild,ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {  MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from "@angular/material/snack-bar";
import { PersonaService } from './dataproject.service';

import { Subscription } from 'rxjs';
import { StateService } from './service';
import { DialoghelpComponent } from './dialoghelp/dialoghelp.component';

import { EditcantidaddespachoComponent } from '../editcantidaddespacho/editcantidaddespacho.component';
import { IInsumoCantidadDespachoModel, IInsumoObraModel } from 'src/app/core/globalservice/ejecucion.obra/models/insumo.models';
import { ServicesDespachoInsumoGQL } from '../graphql/services.despachoinsumo.gql';
import { ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Apollo, gql } from 'apollo-angular';
import { ServiceIdFromObra } from 'src/app/dashboard/shell.dashboard/service.id';


export interface DialogInterface {
  cancelButtonLabel: string;
  confirmButtonLabel: string;
  dialogHeader: string;
  dialogContent: IInsumoCantidadDespachoModel[];

  callbackMethod: () => void;
  name:string,
  animal:string,
}

const AGREGA_DESPACHO = gql`
mutation {

  agregarDespacho(
    id:"",
    nroDespacho:"wer",
    nroRequerimiento:"wer",
    fechaPedido:"wer",
    fechaDespacho:"wer",
    despachoinsumo:[]
    idEjecucionObra:"wer"

    ){
    id
  }
}`

@Component({
  selector: 'app-buscaproduto',
  templateUrl: './buscaproducto.component.html',
  styleUrls: ['./buscaproducto.component.css']
})
export class BuscaproductoComponent implements OnInit {
  der:boolean = true
  
  constructor(
    private _ac:ActivatedRoute,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,private stateService:StateService,
    public spiner : NgxSpinnerService,
    private cdr: ChangeDetectorRef,
    private apollo:Apollo,
    private route:ActivatedRoute,
    
    
    

    ) { 
      this.spiner.show()
      
      
       
    }

  selection = new SelectionModel<IInsumoCantidadDespachoModel>(true, []);

  sub:Subscription
  public dialogSubmissionMessage: string = '';

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'insumo', 'umedida', 'categoria'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;




  ngOnInit() {
    this.der = this._ac.snapshot.data . aliasRouteListaInsumosBaseResolver.loading
      
      
    this._ac.data.subscribe(
      
      (list) => {
        let der = list.aliasRouteListaInsumosBaseResolver.data.listarInsumos
        
        let array = der.map((item:any) => {
          this.spiner.hide()
          return item

        });
        this.listData = new MatTableDataSource(array);
        this.cdr.detectChanges();
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
        this.listData.filterPredicate = (data, filter) => {
          return this.displayedColumns.some(ele => {
            return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
          });
        };
      }
      );
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }



  // Whether the number of selected elements matches the total number of rows
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.listData.data.length;
    return numSelected === numRows;
  }

  // Selects all rows if they are not all selected; otherwise clear selection. 
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.listData.data);
  }

  // The label for the checkbox on the passed row 
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  generateDespacho() { 
    const numSelected = this.selection.selected;  
    
    if (numSelected.length > 0) {  
        if (confirm("Are you sure to delete items ")) {  
            /*this.service.deleteData(numSelected).subscribe(result => {  
                alert(result);  
                this.LoadData();  
            })*/
            
            this.openDialogOne(this.selection.selected)  
        }  
    } else {  
        alert("Select at least one row");  
    }  
}




ngOnDestroy(){
  //this.sub.unsubscribe()
  

}
// This method invokes the first dialog
 
openDialogOne(selected:IInsumoObraModel[]) {
  
  
  console.log(selected)
  const dialogInterface: DialogInterface = {
    dialogHeader: 'I am created by Reusable dialog',
    dialogContent: selected,
    cancelButtonLabel: 'Cancel',
    confirmButtonLabel: 'Submit',
    name: "this.name", 
    animal: "this.animal",
    

    callbackMethod: () => {
      this.performDialogSubmitMethodOne();
    },
  };
  
  this.dialog.open(EditcantidaddespachoComponent, {
    width: '80%',
    height:'80%',
    data: dialogInterface,
  })
}


 // This method invokes the second dialog


/*openDialogTwo() {
  const dialogInterface: DialogInterface = {
    dialogHeader: 'I am created by Reusable dialog',
    dialogContent: [{cantidad,categoria,id,insumo,umedida}],
    cancelButtonLabel: 'Cancel',
    confirmButtonLabel: 'Submit',
    name: "this.name", 
    animal: "this.animal",
    callbackMethod: () => {//hasta que no se haya precionado en ok, no se ejecuta este calback
      this.performDialogSubmitMethodTwo();
    },
  };
  this.dialog.open(DialoghelpComponent, {
    //las dimenciones del modal por defecto con auto, se adaptan al contenido
    data: dialogInterface,
  })

}*/

performDialogSubmitMethodOne() {
  this.dialogSubmissionMessage = 'The dialog submitted from the Dialog ONE';
  this.sub = this.stateService.animalConvertObservable.subscribe((val)=>{
    this.dialogSubmissionMessage = val

  })
}
/*
performDialogSubmitMethodTwo() {
  this.dialogSubmissionMessage = 'The dialog submitted from the Dialog TWO';
   this.sub = this.stateService.animalConvertObservable.subscribe((val)=>{
    this.dialogSubmissionMessage = val

  })
}
*/

}
