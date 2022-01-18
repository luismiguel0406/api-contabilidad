export interface IEmpresa {
 
  nombre: string;
  inicialesEmpresa: string;
  rnc: string;
  sucursal: number;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  direccion: string;
  telefono: string;
  correo: string;
  usuario: string;
  terminal: string;

}