

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
}

export interface IDetalleFactura {
  facturaId: number;
  itemId: number;
  descripcion:number;
  cantidad: number;
  precioVenta: number;
  descuento: number;
  total: number;
}
