import { TTipoGenerico } from "./tipoGenerico.type";

export type TProveedor = {
  id?: number;
  nombre: string;
  documento: string;
  createdAt: Date;
  updatedAt: Date | null;
  estado: boolean;
  tipoContactoId: number;
  tipoProveedorId: number;
  tipoDocumentoId: number;
  tipoServicioId: number;
  direccionId: number;
  entidadBancariaId: number;
  numeroCuenta: string;
  telefono: string;
  email: string;
  infoAdicional: string;
  usuario: string;
  terminal: string;
};

export type TTipoDocumento = TTipoGenerico & {
  mascara: string;
};
