export interface IAccionContable {
  transaccionId: number;
  tipoCuentaId: number;
  accion: number;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  usuario: string;
  terminal: string;
}

export interface IEntradaContable {
  noEntrada: number;
  descripcion: string;
  totalDebito: number;
  totalCredito: number;
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
  comentario: string;
  debito: number;
  credito: number;
  estado: boolean;
  entradaId: number;
}
