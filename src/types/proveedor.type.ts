import { TComun } from "./comun.type";
import { TTipoGenerico } from "./tipoGenerico.type";

export type TProveedor = TComun & {
  id?: number;
  nombre: string;
  documento: string;
  tipoProveedorId: number;
  tipoDocumentoId: number;
  tipoServicioId: number;
  bancoId: number;
  bancoOpcionalId: number;
  numeroCuenta: string;
  numeroCuentaOpcional: string;
  telefono: string;
  email: string;
  infoAdicional: string;
};

export type TTipoDocumento = TTipoGenerico & {
  mascara: string;
};
