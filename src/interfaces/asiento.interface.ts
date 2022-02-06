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

export interface IAsientoContable {
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
