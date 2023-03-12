export interface IEmpresa {
  [index:number]:number;
  [index:symbol]:symbol;
  nombre: string;
  alias: string;
  rnc: string;
  sucursalId: number | null;
  planId:number;
  estado: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  direccion: string;
  telefono: string;
  correo: string;
  usuario: string;
  terminal: string;

}
