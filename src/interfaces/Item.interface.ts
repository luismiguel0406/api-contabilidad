export interface IItem {
  [index:number]:number;
  [index:symbol]:symbol;
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
  [index:number]:number;
  [index:symbol]:symbol;
  descripcion: string;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  usuario: string;
  terminal: string;
}
