import { TCommon } from "./common.type";

export type TAccountingGroup = TCommon & {
  id?: number;
  accountNumber: string;
  description: string;
  accountTypeId: number | null;
  currencyId: number;
};

export type TAccountingAccount = TCommon & {
  id?: number;
  accountNumber: string;
  description: string;
  accountTypeId: number;
  accountingGroupId: number;
  currencyId: number;
  companyId?: number;
};

export type TMovementAccounts = TCommon & {
  id?: number;
  accountingAccountId: number;
  registryTypeId: number;
  effectTypeId: number;
  debit: number;
  credit: number;
  balance: number;
  comment: string;
  referenceId: number;
  transactionId: number;
};
