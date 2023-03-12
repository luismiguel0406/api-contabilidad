export interface ITipoVentas {
  [index:number]:number;
  [index:symbol]:symbol;
  descripcion: string;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  usuario: string;
  terminal: string;
  tipoItemId: number;
}
