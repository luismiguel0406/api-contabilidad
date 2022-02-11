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
  tipoFacturaId: number;
  empresaId: number;
  proveedorId: number;
  monedaId: number;
  medioDePagoId: number;
  tipoGastoId: number;
  detalleFacturaPorPagar:Array<IDetalleFacturaPorPagar>
}

export interface IDetalleFacturaPorPagar{

  facturaId:number;
  cuentaId:number;
  cuentaDescripcion:string;
  valor:number;
  detalleImpuesto:string | null;

}
