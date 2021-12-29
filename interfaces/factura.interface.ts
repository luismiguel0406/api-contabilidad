export interface IFactura {
  numeroFactura: number;
  Ncf: string;
  NcfModificado: string;
  subTotal: number;
  descuento: number;
  total: number;
  comentario: string;
  fechaFactura: Date;
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

