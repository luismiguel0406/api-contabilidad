import { IDetalleImpuestos } from "./impuestos.interface";

export interface ITipoFacturasPorPagar {
  descripcion: string;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  usuario: string;
  terminal: string;
}
export interface IFacturasPorPagar {
  noFactura: string;
  Ncf: string;
  NcfModificado: string;
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
  detalle:Array<IDetalleFacturaPorPagar>
}

export interface IDetalleFacturaPorPagar{

  cuentaId:number;
  descripcionCuenta:string;
  valor:number;
  detalleImpuesto:Array<IDetalleImpuestos> | null;

}
