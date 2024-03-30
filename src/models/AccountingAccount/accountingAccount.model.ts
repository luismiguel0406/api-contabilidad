//import empresas from "../Empresa/empresa.model";
import { DataTypes, Model } from "sequelize";
import conexion from "../../database";
import accountType from "./accountType.model";
import accountingGroup from "./accountingGroup.model";
import currency from "../Facturacion/currency/currency.model";
import { TAccountingAccount } from "types";

const accountingAccount = conexion.define<Model<TAccountingAccount>>(
  "accountingAccount",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    accountNumber: {
      type: DataTypes.STRING(25),
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
      allowNull: false,
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
    },
    accountingGroupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    companyId: {
      type: DataTypes.INTEGER,
    },
    currencyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { schema: "CUENTAS" }
);

//---- ASOCIACIONES -------//

accountType.hasMany(accountingAccount, {
  foreignKey: "accountTypeId",
});
accountingAccount.belongsTo(accountType);

accountingGroup.hasMany(accountingAccount, {
  foreignKey: "accountingGroupId",
});
accountingAccount.belongsTo(accountingGroup);

/*empresas.hasMany(accountingAccount, { foreignKey: "empresaId" });
accountingAccount.belongsTo(empresas);*/

currency.hasMany(accountingAccount, { foreignKey: "currencyId" });
accountingAccount.belongsTo(currency);

export default accountingAccount;
