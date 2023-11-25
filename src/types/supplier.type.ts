import { TCommon } from "./common.type";
import { TTypeGeneric } from "./typeGeneric.type";

export type TSupplier = TCommon & {
  id?: number;
  name: string;
  document: string;
  typeSupplierId: number;
  typeDocumentId: number;
  typeServiceId: number;
  bankId: number;
  bankOptionalId: number;
  accountNumber: string;
  accountNumberOptional: string;
  phone: string;
  email: string;
  info: string;
};

export type TTypeDocument = TTypeGeneric & {
  mask: string;
};
