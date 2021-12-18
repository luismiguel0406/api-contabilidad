export interface IFactura {
  numeroFactura: number;
  Ncf: string;
  NcfModificado: string;
  subTotal: number;
  descuento: number;
  total: number;
  comentario: number;
  fechaFactura: Date;
  fechaVencimiento: Date | null;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date;
  usuario: string;
  terminal: string;
  empresaId: number;
  clienteId: number;
  monedaId: number;
  medioDePagoId: number;
  impuestoId: number;// FACTURA PUEDE TENER MAS DE UN IMPUESTO , CONSIDERAR ARRAY DE IMPUESTOS
}

export interface ITipoFactura{


}