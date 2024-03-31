import { TCommon } from "./common.type";

export type TItem = TCommon & {
  id?: number;
  name: string;
  description: number;
  stock: number;
  minimunStock: number;
  unitPrice: number;
  cost?: number;
  itemTypeId: number;
  accountingAccountId: number;
};
