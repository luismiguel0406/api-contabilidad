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
};

export type TCurrency = TTypeGeneric & {
  symbol: string;
};
//Next to demo
/*export type TBillsDetails = {
  cuentaId:number;
  numeroCuenta:string;
  tipoCuentaId:number; 
  descripcion:string;
  monto:number;
  detalleImpuesto:Array<TDetalleImpuestos> | null;
}*/
