export interface IImpuestos {
  nombre: string;
  alias: string;
  porcentaje: number;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  usuario: string;
  terminal: string;
}

export interface IDetalleImpuestos {
  impuestoId: number;
  valor: number;
}
