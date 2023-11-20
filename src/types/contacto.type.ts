import { TComun } from "./comun.type";

export type TDireccion = TComun & {
  id?: number;
  distrito: string;
  sector: string;
  calle: string;
  numeroEdificio: number;
  referenciaContactoId: number;
  tipoContactoId: number;
};
