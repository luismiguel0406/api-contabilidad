import { TTipoGenerico } from "./tipoGenerico.type";

export type TProveedor = {
    id?:number;
    nombre: string;
    documento: string;
    createdAt: Date;
    updatedAt: Date | null;
    estado: boolean;
    tipoContactoId: number;
    tipoProveedorId: number;
    usuario: string;
    terminal: string;
  }

  export type TTipoDocumento = TTipoGenerico & {
    mascara:string;
  }
  