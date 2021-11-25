export interface IInsumoObraModel {
    id?:string
    insumo:string
    umedida:string
    categoria:string
}
export interface IInsumoCantidadDespachoModel extends IInsumoObraModel{
    cantidad?:number
}
