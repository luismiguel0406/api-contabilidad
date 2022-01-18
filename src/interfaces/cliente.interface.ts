export interface ICliente {
  nombre: string;
  RNC_Cedula: string;
  direccion: string;
  pagaItbis: boolean;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  usuario: string;
  terminal: string;
  tipoContactoId: number;
  tipoClienteId: number;
}

export interface ITipoCliente {
  descripcion: string;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  usuario: string;
  terminal: string;
}
