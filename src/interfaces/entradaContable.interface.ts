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
  [index: number]:number;
  [index:symbol]:symbol;
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
  documentoId:number;
  detalle:Array<IEntradaContableDetalle> | null
  
  
}

export interface IEntradaContableDetalle {
  cuenta: string;
  descripcionCuenta: string;
  debito: number;
  credito: number;
  tipoCuentaId:number;
  detalleImpuesto:string;
}
