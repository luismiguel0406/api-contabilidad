export interface IComprobante {
  tipo: string;
  descripcion: string;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  usuario: string;
  terminal: string;
}
