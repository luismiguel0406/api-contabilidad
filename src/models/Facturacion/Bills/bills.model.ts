import { DataTypes, Model } from "sequelize";
import suppliers from "../../suppliers/suppliers.model";
import conexion from "../../../database";
import currency from "../currency/currency.model";
import { TBills } from "types";
import paymentMethod from "../PaymentMethod/paymentMethod.model";

const bills = conexion.define<Model<TBills>>(
  "bills",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    billNumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    ncf: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    ncfModified: {
      type: DataTypes.STRING(25),
    },
    subTotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    totalDiscount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    totalTaxes: {
      type: DataTypes.FLOAT,
      defaultValue: 0.0,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    comments: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    limitDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terminal: {
      type: DataTypes.STRING,
    },
    paymentConditions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    supplierId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currencyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    paymentMethodId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    costCenter: {
      type: DataTypes.STRING,
    },
    billDetailItems: {
      type: DataTypes.JSONB,
    },
  },
  { schema: "FACTURACION" }
);

//-------ASOCIACIONES-------//

suppliers.hasMany(bills, { foreignKey: "supplierId" });
bills.belongsTo(suppliers);

currency.hasMany(bills, { foreignKey: "currencyId" });
bills.belongsTo(currency);

paymentMethod.hasMany(bills, { foreignKey: "paymentMethodId" });
bills.belongsTo(paymentMethod);

export default bills;
