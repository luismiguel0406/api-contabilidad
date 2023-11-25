import { TCommon } from "./common.type";

export type TAddress = TCommon & {
  id?: number;
  district: string;
  section: string;
  street: string;
  builtNumber: number;
  referenceId: number;
  typeContactId: number;
};
