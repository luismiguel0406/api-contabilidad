export interface IEmpresa {
 
  nombre: string;
  alias: string;
  rnc: string;
  sucursalId: number;
  estado: boolean;
  planId:number;
  createdAt: Date;
  updatedAt: Date | null;
  direccion: string;
  telefono: string;
  correo: string;
  usuario: string;
  terminal: string;

}
