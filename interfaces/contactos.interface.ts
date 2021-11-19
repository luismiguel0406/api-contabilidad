
// INTERFACES CONTACTOS //

export interface ICorreo {
    correo: string;
    estado: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    usuario: string;
    terminal: string;
    contactoId:number;
    tipoContactoId:number;
  }

  export interface IDireccion {
    direccion: string;
    estado: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    usuario: string;
    terminal: string;
    contactoId:number;
    tipoContactoId:number;
  }

  export interface ITelefono {
    telefono: string;
    estado: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    usuario: string;
    terminal: string;
    contactoId:number;
    tipoContactoId:number;
  }

