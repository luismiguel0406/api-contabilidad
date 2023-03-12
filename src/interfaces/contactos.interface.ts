
// INTERFACES CONTACTOS //

export interface ICorreo {
    [index: number]: number;
    [index: symbol]: symbol;
    correo: string;
    estado: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    usuario: string;
    terminal: string;
    clienteId:number;
    proveedorId:number;
    tipoContactoId:number;
  }

  export interface IDireccion {
    [index: number]: number;
    [index: symbol]: symbol;
    direccion: string;
    estado: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    usuario: string;
    terminal: string;
    clienteId:number;
    proveedorId:number;
    tipoContactoId:number;
  }

  export interface ITelefono {
    [index: number]: number;
    [index: symbol]: symbol;
    telefono: string;
    estado: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    usuario: string;
    terminal: string;
    clienteId:number;
    proveedorId:number;
    tipoContactoId:number;
  }

  export interface ItipoContacto {
    [index:number]: number;
    [index:symbol]:symbol;
    descripcion: string;
    createdAt: Date;
    updatedAt: Date | null;
    estado: boolean;
    usuario: string;
    terminal: string;
  }