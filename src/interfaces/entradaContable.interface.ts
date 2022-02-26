export interface IAccionContable {
  transaccionId: number;
  tipoCuentaId: number;
  accion: string;
  movimiento:string;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  usuario: string;
  terminal: string;
}

export interface IEntradaContable {
  noEntrada: number;
  totalDebito: number;
  totalCredito: number;
  comentario: string;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  usuario: string;
  terminal: string;
  empresaId: number;
}

export interface IEntradaContableDetalle {
  cuenta: string;
  descripcionCuenta: string;
  debito: number;
  credito: number;
  estado: boolean;
  entradaId: number;
}
