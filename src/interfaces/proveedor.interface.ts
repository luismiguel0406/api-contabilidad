export interface IProveedor {
  [index:number]:number;
  [index:symbol]:symbol;
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
  [index:number]: number;
  [index:symbol]: symbol;
  tipoProveedor: string;
  createdAt: Date;
  updatedAt: Date | null;
  estado: boolean;
  usuario: string;
  terminal: string;
} 
