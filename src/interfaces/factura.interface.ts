export interface IFactura {
  noFactura: number;
  Ncf: string;
  NcfModificado: string | null;
  subTotal: number;
  descuento: number;
  totalImpuestos: number;
  total: number;
  comentario: string;
  fecha: Date;
  fechaVencimiento: Date | null;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  usuario: string;
  terminal: string;
  empresaId: number;
  clienteId: number;
  monedaId: number;
  medioPagoId:number;
  detalleFactura: IDetalleFactura | null;
}

export interface IDetalleFactura {
  facturaId: string | null;
  itemId: number;
  descripcion: string;
  cantidad: number;
  precioVenta: number;
  descuento: number;
  total: number;
  detalleImpuesto: string | null; 
}
