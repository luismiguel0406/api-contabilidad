import { TCommon } from "./common.type";

export type TAddress = {
  districtId: number;
  sector: string;
  street: string;
  buildingNumber: number;
};

export type TProvince = TCommon & {
  id?: number;
  description: string;
  code: string;
  identifier: string;
};
