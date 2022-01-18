export interface ITipoVentas {
  descripcion: string;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  usuario: string;
  terminal: string;
  tipoItemId: number;
}
