import { DataSource } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { IInsumoCantidadDespachoModel, IInsumoObraModel } from 'src/app/core/globalservice/ejecucion.obra/models/insumo.models';
import { DialogInterface } from '../buscaproducto/buscaproducto.component';
import { StateService } from '../buscaproducto/service';
import * as es6printJS from "print-js";
import { ServicesDespachoInsumoGQL } from '../graphql/services.despachoinsumo.gql';
import { first } from 'rxjs/operators';
import { IInsumoDespachoModel } from 'src/app/core/globalservice/ejecucion.obra/models/insumos.obra.models';

import { FormArray, FormControl } from '@angular/forms';
import { Controls, NgxSubFormComponent } from 'ngx-sub-form';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceIdFromObra } from 'src/app/dashboard/shell.dashboard/service.id';


interface IInsumoDespachoForm  {
      id:string;
      nroDespacho:string;
      nroRequerimiento:string;
      fechaPedido:string;
      fechaDespacho:string;
}



@Component({
  selector: 'app-editcantidaddespacho',
  templateUrl: './editcantidaddespacho.component.html',
  styleUrls: ['./editcantidaddespacho.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class EditcantidaddespachoComponent extends NgxSubFormComponent<IInsumoDespachoForm> {
  protected getFormControls(): Controls<IInsumoDespachoForm> {
    return {
      id:new FormControl(),
      fechaDespacho: new FormControl(),
      fechaPedido: new FormControl(),
      nroDespacho: new FormControl(),
      nroRequerimiento: new FormControl(),
    }
  }
  animal: string;
  name: string;
  insumoscol1:IInsumoCantidadDespachoModel[] =[]
  insumoscol2:IInsumoCantidadDespachoModel[] =[]
  tmp:IInsumoCantidadDespachoModel[] =[]
  obj:any=[]
  arr1 = new Array(10)
  arr2 = new Array(10)
  dataSource:any;
  dataSource2:any;
  displayedColumns = ['insumo', 'umedida', 'cantidad'];

  idEjecucionObra:string
  inforiorHoja:boolean = false
  



  constructor(
    public dialogRef: MatDialogRef<EditcantidaddespachoComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dialogData: DialogInterface,
    public servicesDespachoInsumo:ServicesDespachoInsumoGQL,
    private route:ActivatedRoute,
    public serviceIdFromObra:ServiceIdFromObra,
    private router:Router,
  ){
    super();
    
    
     //agrupar en un array 10 objetos validar que la selecicion de insumos no supere los 20
     this.obj =  this.dialogData.dialogContent.map((val)=>{
      
      return {...val,cantidad:0}
      
      
    })
    this.obj.forEach((val:any,index:number) => {
     
      if(index<10){
        this.insumoscol1.push(val)
      }else if(index >= 10 && index < 20){
        this.insumoscol2.push(val)

      }
    })
  
  this.dataSource = new ExampleDataSource(this.insumoscol1);
  this.dataSource2 = new ExampleDataSource(this.insumoscol2);
  this.serviceIdFromObra.get().subscribe((val)=>{
    this.idEjecucionObra = val

  })
    
     
    

  }



  update(el: IInsumoCantidadDespachoModel, cantidad: number) {
    
    if (cantidad == null) { return; }
    // copy and mutate
    const copy = this.dataSource.data().slice()
    el.cantidad = cantidad;
    
    
    this.dataSource.update(copy);
  }
  jo(){
    this.inforiorHoja = true
  }

  handleDialogSubmit() {
    this.jo()
    
    
    
    let jo = this.obj.map((val:IInsumoCantidadDespachoModel)=>{
      return {
        id:val.id,
        umedida:val.umedida,
        categoria:val.categoria,
        insumo:val.insumo,
        cantidad:Number(val.cantidad),
      }

    })
    

    const der:IInsumoDespachoModel=  {
    id:"",
    nroDespacho:this.formGroupValues.nroDespacho,
    nroRequerimiento:this.formGroupValues.nroRequerimiento,
    fechaPedido:this.formGroupValues.fechaPedido,
    fechaDespacho:this.formGroupValues.fechaDespacho,
    idEjecucionObra:this.idEjecucionObra,
    despachoinsumo:jo
    }
    /*this.servicesDespachoInsumo
    .agregar(der)
    .pipe(first())
    .subscribe()//importante para que pueda grabar en la base de datos.*/
    
    //this.router.navigate([`dashboard/obra/${this.idEjecucionObra}`])

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
    header{
      display: inline;
      visibility: visible;

    }
    .ficha_despacho{
      width: 100;
      display: flex;
      justify-content: center;
    }
    .ficha_despacho_bajo{
      width: 100px;
      display: flex;
      justify-content: center;
      text-align: center;
      margin-top: 50px;
    }
    .cabecera_bajo{
      width: 100%;
      display: flex;
      background-color: yellow;
      justify-content: space-between;
      margin-top: 10px;
    }
    .cabecera{
      width: 100%;
      display: flex;
      background-color: yellow;
      justify-content: space-between;
      margin-top: 25px;
    }
    
    table, th,td {
      border: 1px solid black;
      border-collapse: collapse;
      border-style: groove;
      padding: 0px;
      height:0px
      
      
      
    }
    
    
    .pie{
      margin-top: 20px;  
      width: 100%;
      display: flex;
      
      align-content: space-between;
      justify-content: space-around;
      flex-wrap: wrap;
      align-items: stretch;
      flex-direction: column;
  }
  .table-container{
    margin-top: 10px;
  } 
    
    `,
    type:'html'
    ,font_size:'10px',
    
  
    })
  
  }

}

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
 export class ExampleDataSource extends DataSource<any> {

  private dataSubject = new BehaviorSubject<IInsumoCantidadDespachoModel[]>([]);

  data() {
    return this.dataSubject.value;
  }

  update(data:any) {
    
    
    this.dataSubject.next(data);
  }

  constructor(data: any[]) {
    super();
    this.dataSubject.next(data);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IInsumoCantidadDespachoModel[]> {
    return this.dataSubject;
  }

  disconnect() {}
}
