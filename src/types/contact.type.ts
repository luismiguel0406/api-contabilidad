import { TCommon } from "./common.type";

export type TAddress = TCommon & {
  id?: number;
  districtId: number;
  sector: string;
  street: string;
  buildingNumber: number;
  referenceId: number;
  typeContactId: number;
};

export type TProvince = TCommon & {
  id?: number;
  description: string;
  code: string;
  identifier: string;
};
