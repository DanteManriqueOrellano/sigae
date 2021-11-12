/**
 * variables
 */
export interface NuevoEjecucionObraInputVariables{
    input: IEjecucionObraModel
}
/**
 * modelo
 */

export interface IEjecucionObraModel {
    id?:string;
    nombrecompletoobra:string;
    alias:string;
}
/**
 * respuesta del resolver
 */
export interface EjecucionObrasResponse{
    ejecucionobras:IEjecucionObraModel[]
}
export interface EjecucionObraResponse{
    ejecucionobra:IEjecucionObraModel
}
/**
 * actualiza con algun criterio de orden
 */
export interface EjecucionObraUpdate{
    input:{
        id:string;
        order:number
    }
}

