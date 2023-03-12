export interface ITipoCuentaContable {
  [index:number]:number;
  [index:symbol]:symbol;
  descripcion: string;
  debito: string;
  credito: string;
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
  tipoCuentaContableId: number;
  grupoCuentasContableId: number;
  monedaId:number;
  empresaId: number;
}
