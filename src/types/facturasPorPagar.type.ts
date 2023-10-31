import { TDetalleImpuestos } from "./impuestos.type";

export type TFacturasPorPagar ={
  id?:number;
  noFactura: string;
  Ncf: string;
  ncfModificado: string;
  subTotal: number;
  totalDescuentos: number;
  totalImpuestos: number;
  total: number;
  comentario: string;
  fecha: Date;
  fechaLimitePago: Date;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  usuario: string;
  terminal: string;
  tipoFacturasPorPagarId: number;
  empresaId: number;
  proveedorId: number;
  monedaId: number;
  medioDePagoId: number;
  tipoGastoId: number;
  detalle:Array<TDetalleFacturaPorPagar>
}

export type TDetalleFacturaPorPagar = {
  cuentaId:number;
  numeroCuenta:string;
  tipoCuentaId:number; 
  descripcion:string;
  monto:number;
  detalleImpuesto:Array<TDetalleImpuestos> | null;
}
