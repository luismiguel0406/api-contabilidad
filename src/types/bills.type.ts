import { TCommon } from "./common.type";
import { TTypeGeneric } from "./typeGeneric.type";

export type TBills = TCommon & {
  id?: number;
  billNumber: string;
  ncf: string;
  date: Date;
  limitDate: Date;
  supplierId: number;
  total: number;
  totalTaxes: number;
  paymentConditions: string;
  orderNumber?: string | null;
  ncfModified: string;
  subTotal: number;
  totalDiscount: number;
  costCenter?: string;
  companyId?: number;
  comments: string;
  currencyId: number;
  paymentMethodId: number;
  billDetailItems: Array<TBillDetailItems>;
};

export type TCurrency = TTypeGeneric & {
  symbol: string;
};

export type TBillDetailItems = {
  accountId: number;
  accountNumber: string;
  accountTypeId: number;
  description: string;
  amount: number;
  detailTaxes: Array<any> | null;
};
