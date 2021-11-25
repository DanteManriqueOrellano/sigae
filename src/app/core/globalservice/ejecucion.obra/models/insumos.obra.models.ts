import { IInsumoCantidadDespachoModel } from "./insumo.models";

export interface IInsumoDespachoModel{
    id:string;
    nroDespacho:string;
    nroRequerimiento:string;
    fechaPedido:string;
    fechaDespacho:string;
    despachoinsumo:IInsumoCantidadDespachoModel[]
    idEjecucionObra:string

}
