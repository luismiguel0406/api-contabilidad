import { TCommon } from "./common.type";

export type TAddress = TCommon & {
  id?: number;
  district: string;
  sector: string;
  street: string;
  buildingNumber: number;
  referenceId: number;
  typeContactId: number;
};
