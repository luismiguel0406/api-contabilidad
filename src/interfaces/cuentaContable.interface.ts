export interface ITipoCuentaContable {
  [index:number]:number;
  [index:symbol]:symbol;
  descripcion: string;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
}
export interface IGrupoCuentaContable {
  [index:number]: number;
  [index:symbol]: symbol;
  cuenta: string;
  descripcion: string;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  usuario: string;
  terminal: string;
  tipoCuentaContableId: number | null;
  monedaId: number;
}
export interface ICuentaContable {
  [index:number]:number;
  [index:symbol]:symbol;
  noCuenta: string;
  descripcion: string;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  usuario: string;
  terminal: string;
  tipoCuentaId: number;
  grupoCuentaId: number;
  monedaId:number;
  empresaId: number;
}
export interface IMovimientoCuentas {
  [index:number]:number;
  [index:symbol]:symbol;
  createdAt: Date;
  cuentaContableId:string;
  tipoRegistroId:number;
  tipoEfectoId:number;
  monto:number;
  descripcion:string;
  usuario:string;
  terminal:string;
  referenciaId:number;
  transaccionId:number;
  saldo:number;
}