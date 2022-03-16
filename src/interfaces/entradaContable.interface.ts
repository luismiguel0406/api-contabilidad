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
  noEntrada: number |string;
  totalDebito: number;
  totalCredito: number;
  comentario: string;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  usuario: string;
  terminal: string;
  empresaId: number;
  transaccionComercialId:number;
  transaccionId:number;
  
  
}

export interface IEntradaContableDetalle {
  cuenta: string;
  descripcionCuenta: string;
  debito: number;
  credito: number;
  estado: boolean;
  entradaId: number;
}
