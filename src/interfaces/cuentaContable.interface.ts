export interface IGrupoCuentaContable {
  cuenta: string;
  descripcion: string;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  usuario: string;
  terminal: string;
  tipoCuentaContableId: number | null;
  empresaId: number;
  monedaId: number;
}

export interface ITipoCuentaContable {
  descripcion: string;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
}
