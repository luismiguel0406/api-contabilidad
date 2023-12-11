import { DataTypes, Model } from "sequelize";
import conexion from "../../database";
import typeSupplier from "./typeSupplier.model";
import { TSupplier } from "types";
import typeDocument from "./typeDocument.model";
import typeService from "./typeService.model";
import banks from "./banks.model";

const suppliers = conexion.define<Model<TSupplier>>(
  "supplier",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    typeSupplierId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    typeDocumentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    document: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    typeServiceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bankId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bankOptionalId: {
      type: DataTypes.INTEGER,
    },
    accountNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    accountNumberOptional: {
      type: DataTypes.STRING,
    },
    info: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.JSONB,
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
  },
  { schema: "PROVEEDORES" }
);

//--- ASOCIACIONES---//

typeSupplier.hasMany(suppliers, { foreignKey: "typeSupplierId" });
suppliers.belongsTo(typeSupplier);

typeDocument.hasMany(suppliers, { foreignKey: "typeDocumentId" });
suppliers.belongsTo(typeDocument);

typeService.hasMany(suppliers, { foreignKey: "typeServiceId" });
suppliers.belongsTo(typeService);

banks.hasMany(suppliers, { foreignKey: "bankId" });
suppliers.belongsTo(banks);

export default suppliers;
