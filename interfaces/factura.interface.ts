

export interface IFactura {
  numeroFactura: number;
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
  detalleFactura:Array<IDetalleFactura>;
}

export interface IDetalleFactura {
  facturaId: number|null;
  itemId: number;
  descripcion:string;
  cantidad: number;
  precioVenta: number;
  descuento: number;
  total: number;
  createdAt: Date;
  updatedAt: Date | null;
}
