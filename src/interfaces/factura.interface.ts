export interface IFactura {
  noFactura: number;
  Ncf: string;
  subTotal: number;
  totalDescuentos: number;
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
  medioDePagoId:number;
  tipoVentaId:number;
  detalleFactura: Array<IDetalleFactura>;
  
}

export interface IDetalleFactura {
  facturaId: number;
  itemId: number;
  descripcion: string;
  cantidad: number;
  precioVenta: number;
  descuento: number;
  total: number;
  detalleImpuesto: string | null; 
}
