import { TCommon } from "./common.type";

export type TAccionEntradaContable = TCommon & {
  transaccionId: number;
  tipoCuentaId: number;
  tipoEfectoId: string;
  tipoRegistroId: string;
};

export type TEntradaContableDetalle = {
  cuentaId: number;
  numeroCuenta: string;
  descripcion: string;
  debito: number;
  credito: number;
};
export type TEntradaContable = TCommon & {
  id?: number;
  numero: number | string;
  debito: number;
  credito: number;
  comentario: string;
  empresaId: number;
  referenciaId: number;
  transaccionId: number;
  detalle: Array<TEntradaContableDetalle>;
};
export type TDataEntradaContable = {
  payload: string;
  id: number;
  total: number;
  comentario: string;
  detalle: any[];
  empresaId: number;
  userId: number;
};

export type TDeterminacionMovimiento = {
  credito: number;
  debito: number;
};

export type TTransaction = TCommon & {
  id?: number;
  name: string;
  payload: string;
};
