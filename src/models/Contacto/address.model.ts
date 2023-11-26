import { DataTypes, Model } from "sequelize";
import conexion from "../../database";
import typeContacts from "./typeContacts.model";
import { TAddress } from "types";

const address = conexion.define<Model<TAddress>>(
  "address",
  {
    district: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sector: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    buildingNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
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
    referenceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    typeContactId: {
      type: DataTypes.INTEGER,
    },
  },
  { schema: "CONTACTOS" }
);

//--- ASOCIACIONES---//

typeContacts.hasMany(address, { foreignKey: "typeContactId" });
address.belongsTo(typeContacts);

export default address;
