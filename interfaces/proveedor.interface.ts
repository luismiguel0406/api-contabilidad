export interface IProveedor {
  nombre: string;
  RNC_Cedula: string;
  createdAt: Date;
  updatedAt: Date | null;
  estado: boolean;
  usuario: string;
  terminal: string;
  tipoContactoId: number;
  tipoProveedorId: number;
}

export interface ITipoPoveedor {
  tipoProveedor: string;
  createdAt: Date;
  updatedAt: Date | null;
  estado: boolean;
  usuario: string;
  terminal: string;
}
