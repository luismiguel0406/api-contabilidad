import { DataTypes, Model } from "sequelize";
import conexion from "../../database";
import itemType from "./itemType.model";
import { TItem } from "types";
import accountingAccount from "../../models/AccountingAccount/accountingAccount.model";

const item = conexion.define<Model<TItem>>(
  "item",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0.0,
    },
    minimunStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    unitPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.0,
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    itemTypeId: {
      type: DataTypes.INTEGER,
    },
    accountingAccountId: {
      type: DataTypes.INTEGER,
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
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
  },
  { schema: "INVENTARIO" }
);

//--- ASOCIACIONES---//

itemType.hasMany(item, { foreignKey: "itemTypeId" });
item.belongsTo(itemType);

itemType.hasMany(accountingAccount, { foreignKey: "accountingAccountId" });
accountingAccount.belongsTo(itemType);

export default item;
