
// INTERFACES CONTACTOS //

export interface ICorreo {
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
    descripcion: string;
    createdAt: Date;
    updatedAt: Date | null;
    estado: boolean;
    usuario: string;
    terminal: string;
  }