import { DataTypes, Model } from "sequelize";
import conexion from "../../database";
import currency from "../Facturacion/currency/currency.model";
import accountType from "./accountType.model";
import { TAccountingGroup } from "types";

const accountingGroup = conexion.define<Model<TAccountingGroup>>(
  "accountingGroup",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    accountNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terminal: {
      type: DataTypes.STRING,
    },
    accountTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currencyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { schema: "CUENTAS" }
);
// --- ASOCIACIONES --- //

accountType.hasMany(accountingGroup, {
  foreignKey: "accountTypeId",
});
accountingGroup.belongsTo(accountType);

currency.hasMany(accountingGroup, { foreignKey: "currencyId" });
accountingGroup.belongsTo(currency);

export default accountingGroup;
