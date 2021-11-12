export interface EInsumo {
    id:string;
    insumo:string;
    umedida:string
}

export interface EInsumoDespacho extends EInsumo {
    cantidad:number


}