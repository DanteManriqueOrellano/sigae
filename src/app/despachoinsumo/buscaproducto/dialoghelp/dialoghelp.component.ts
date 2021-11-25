import { ChangeDetectionStrategy, Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { StateService } from '../service';
import printJS from 'print-js'
import * as es6printJS from "print-js";
import { DialogInterface } from '../buscaproducto.component';

import { DataSourceDialog } from './datasource.dialog';

import { IInsumoCantidadDespachoModel, IInsumoObraModel } from 'src/app/core/globalservice/ejecucion.obra/models/insumo.models';
@Component({
  selector: 'app-dialoghelp',
  templateUrl: './dialoghelp.component.html',
  styleUrls: ['./dialoghelp.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DialoghelpComponent {

  animal: string;
  name: string;
  insumoscol1:IInsumoObraModel[] =[]
  insumoscol2:IInsumoObraModel[] =[]
  arr1 = new Array(10)
  arr2 = new Array(10) 

  displayedColumns = ['insumo', 'umedida', 'cantidad'];
  dataSource = new DataSourceDialog(this.dialogData.dialogContent);

  constructor(
    public dialogRef: MatDialogRef<DialoghelpComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dialogData: DialogInterface,
    public stateService: StateService,
  ) {
     //agrupar en un array 10 objetos validar que la selecicion de insumos no supere los 20
     this.dialogData.dialogContent.forEach((val)=>{
      if(this.insumoscol1.length<10){
      
        this.insumoscol1.push(val)

      
      }else if (this.insumoscol1.length == 10 ){
        this.insumoscol2.push(val)
      }else if(this.insumoscol1.length > 10){
        console.log("muchos elelentos en la ficha")
        return 
      }
    })
  }
  update(el: IInsumoCantidadDespachoModel, cantidad: number) {
    console.log(cantidad)
    if (cantidad == null) { return; }
    // copy and mutate
    const copy = this.dataSource.data().slice()
    el.cantidad = cantidad;
    console.log(el)
    this.dataSource.update(copy);
  }
  

  handleDialogSubmit() {
    this.print()
    
    
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

  @HostListener("keydown.esc") 
  public onEsc() {
    this.closeDialog();
  }
  print(){
    es6printJS({printable:'print',style:`
    .ficha_despacho{
      width: 100;
      display: flex;
      justify-content: center;
    }
    .cabecera{
      width: 100%;
      display: flex;
      background-color: yellow;
      justify-content: space-between;
    }
    table, th,td{
      width: 100%;
      border:1px solid black;
      border-collapse:collapse;
      padding:0px;
    }
    td, th{
      padding:0px;
    }
    .pie{
      width: 100%;
      display: flex;
      background-color: tomato;
      align-content: space-between;
      justify-content: space-around;
      flex-wrap: wrap;
      align-items: stretch;
      flex-direction: column;
  }
  .table-container{
    margin-top: 40px;
  } 
    
    `,
    type:'html'
    ,font_size:'10px',
    
  
    })
  }



}
