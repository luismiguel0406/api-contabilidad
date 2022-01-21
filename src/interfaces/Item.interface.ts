export interface IItem {
  descripcion: string;
  precioCompra: number;
  precioVenta: number;
  margenGanancia: number;
  cantidad: number;
  cantidadMinima: number;
  ubicacion: string;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  usuario: string;
  terminal: string;
  tipoItemId: number;
  cuentasContablesId:Array<number>;
}

export interface ITipoItem {
  descripcion: string;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  usuario: string;
  terminal: string;
}
