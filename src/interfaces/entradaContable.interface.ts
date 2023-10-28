export interface IAccionContable {
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
export interface IEntradaContableDetalle {
  cuentaId:number;
  numeroCuenta: string;
  descripcion: string;
  debito: number;
  credito: number;
}
export interface IEntradaContable {
  [index: number]:number;
  [index:symbol]:symbol;
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
  detalle:Array<IEntradaContableDetalle>
}
export interface IDataEntradaContable{
  payload:string;
  id:number;
  total: number;
  comentario:string;
  detalle:any[];
}

export interface IDeterminacion  {
  credito: number;
  debito: number;
}