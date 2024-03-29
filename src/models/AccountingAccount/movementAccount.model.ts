import { DataTypes, Model } from "sequelize";
import conexion from "../../database";
import transaction from "../Transaction/Transaction.model";
import accountingAccount from "./accountingAccount.model";
import registryType from "./registryType.model";
import effectType from "./effectType.model";
import { TMovementAccounts } from "types";

const movementAccount = conexion.define<Model<TMovementAccounts>>(
  "movementAccount",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    accountingAccountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    registryTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    effectTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    debit: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    credit: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    balance: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
      defaultValue: "SA",
    },
    terminal: {
      type: DataTypes.STRING,
      defaultValue: "SA",
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    referenceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    transactionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { schema: "CUENTAS", updatedAt: false }
);

// --- ASOCIACIONES --- //
transaction.hasMany(movementAccount, { foreignKey: "transactionId" });
movementAccount.belongsTo(transaction);

accountingAccount.hasMany(movementAccount, {
  foreignKey: "accountingAccountId",
});
movementAccount.belongsTo(accountingAccount);

registryType.hasMany(movementAccount, { foreignKey: "registryTypeId" });
movementAccount.belongsTo(registryType);

effectType.hasMany(movementAccount, { foreignKey: "effectTypeId" });
movementAccount.belongsTo(effectType);

export default movementAccount;
