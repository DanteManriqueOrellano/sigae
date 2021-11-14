import { Component, OnInit } from '@angular/core';
import * as es6printJS from "print-js";

interface IProject
{
  id:string;
  insumo:string;
  umedida:string;
  categoria:string;
}

const insumos:IProject[] = [
  {id:"1" ,insumo:'ALAMBRE NEGRO RECOCIDO N° 8',umedida:"	KG",categoria:"	FERRETERIA"},
  {id:"2" ,insumo:'ALAMBRE NEGRO RECOCIDO N° 16',umedida:"	KG",categoria:"	FERRETERIA"},
  {id:"3" ,insumo:'ANGULO DE ACERO "L" 1.1/2"x1/8"',umedida:"	VAR",categoria:"	FERRETERIA"},
  {id:"4" ,insumo:'ACERO CORRUGADO fy = 4200 kg/cm2 GRADO 60',umedida:"	VAR",categoria:"	FERRETERIA"},
  {id:"5" ,insumo:'CLAVOS PARA MADERA CON CABEZA'	,umedida:"KG",categoria:"	FERRETERIA"},
  {id:"6" ,insumo:'PLATINA DE FIERRO 2"x1/8"'	,umedida:"PLN",categoria:"	CERRAJERIA"},
  {id:"7" ,insumo:'PLANCHA DE FIERRO ESTRIADA e=3/32"'	,umedida:"PLN",categoria:"	CERRAJERIA"},
  {id:"8" ,insumo:'GIGANTOGRAFIA A TODO COLOR DE 13 ONZAS'	,umedida:"UND",categoria:"	LIBRERIA"},
  {id:"9" ,insumo:'CEMENTO PORTLAND TIPO I (42.5 kg)'	,umedida:"BOL",categoria:"	FERRETERIA"},
  {id:"10" ,insumo:'LADRILLO KK TIPO IV 18 HUECOS 9x13x24 cm'	,umedida:"UND",categoria:"	FERRETERIA"},
  {id:"11" ,insumo:'MADERA TORNILLO EN PARANTES 4"x4"'	,umedida:"P2",categoria:"	MADERERA"},
  {id:"12" ,insumo:'MADERA TORNILLO EN CARTEL-LAMINA DE 2"x2"',umedida:"P2",categoria:"	MADERERA"},
  {id:"13" ,insumo:'CERRADURA PESADA DE TRES GOLPES'	,umedida:"UND",categoria:"	FERRETERIA"},
  {id:"14" ,insumo:'SOLDADURA ELECTRICA CELLOCORD'	,umedida:"KG",categoria:"	FERRETERIA"},
  {id:"15" ,insumo:'TUBO CUADRADO DE FIERRO DE 4"x4" e=1/16"'	,umedida:"VAR",categoria:"	CERRAJERIA"},
  {id:"16" ,insumo:'CASCO C/CARETA PROTECTORA DE SEGURIDAD'	,umedida:"UND",categoria:"	FERRETERIA"},
  {id:"17" ,insumo:'COMPACTADORA VIBRATORIA TIPO PLANCHA 4 HP'	,umedida:"UND",categoria:"	ALQUILER"},
  {id:"18" ,insumo:'MALLA DE SEGURIDAD (ROLLO DE 50yd)'	,umedida:"RLL",categoria:"	FERRETERIA"},
  {id:"19" ,insumo:'CONOS REFLECTIVOS DE SEGURIDAD 28"'	,umedida:"UND",categoria:"	FERRETERIA"},
  {id:"20" ,insumo:'MARTILLO NEUMATICO DE 25-29 kg'	,umedida:"UND",categoria:"	ALQUILER"}
  ]

@Component({
  selector: 'app-previewdespacho',
  templateUrl: './previewdespacho.component.html',
  styleUrls: ['./previewdespacho.component.css']
})
export class PreviewdespachoComponent implements OnInit {
  insumoscol1:IProject[] =[]//= insumoscol1
  insumoscol2:IProject[] =[]//= insumoscol2
  constructor() { }

  ngOnInit(): void {
    //agrupar en un array 10 objetos validar que la selecicion de insumos no supere los 20
    insumos.forEach((val)=>{
      if(this.insumoscol1.length<10){
        this.insumoscol1.push(val)
      }else if (this.insumoscol1.length == 10 ){
        this.insumoscol2.push(val)
      }
    })
  }
  printJS1(){
    
    es6printJS({printable:'printJS-form',style:`
    table, th,td {
      border: 1px solid black;
      border-collapse: collapse;
      border-style: groove;
      padding: 0px;
      height:0px
      
      
    }
    `,
    type:'html'
  
    })//no se puso el tamao de letra y se acomodo solo. las propiedades de la tabla tienen qe ir en esa misma secuiencia
  }

}
