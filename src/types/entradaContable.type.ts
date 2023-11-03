export type TAccionEntradaContable = {
    transaccionId: number;
    tipoCuentaId: number;
    tipoEfectoId: string;
    tipoRegistroId:string;
    estado: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    usuario: string;
    terminal: string;
}

  export type TEntradaContableDetalle = {
    cuentaId:number;
    numeroCuenta: string;
    descripcion: string;
    debito: number;
    credito: number;
  }
  export type TEntradaContable = {
    id?:number;
    numero: number |string;
    debito: number;
    credito: number;
    comentario: string;
    estado: boolean;
    createdAt: Date | null;
    updatedAt: Date | null;
    usuario: string;
    terminal: string;
    empresaId: number;
    referenciaId:number;
    transaccionId:number;
    detalle:Array<TEntradaContableDetalle>
  }
  export type TDataEntradaContable = {
    payload:string;
    id:number;
    total: number;
    comentario:string;
    detalle:any[];
    empresaId:number;
    userId:number
  }
  
  export type TDeterminacion = {
    credito: number;
    debito: number;
  }

 