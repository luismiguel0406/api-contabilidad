export interface ITipoComprobante {
  [index:number]:number;
  [index:symbol]:symbol;
  tipo: string;
  descripcion: string;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  usuario: string;
  terminal: string;
}
