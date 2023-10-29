export type TCliente = {
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
  
  export type TTipoCliente ={
    descripcion: string;
    estado: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    usuario: string;
    terminal: string;
  }