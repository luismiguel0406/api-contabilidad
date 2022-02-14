export interface ITipoCuentaContable {
  descripcion: string;
  debito: string;
  credito: string;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
}
export interface IGrupoCuentaContable {
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
