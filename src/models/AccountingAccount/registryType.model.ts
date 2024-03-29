import { DataTypes, Model } from "sequelize";
import conexion from "../../database";
import { TTypeGeneric } from "types";

const registryType = conexion.define<Model<TTypeGeneric>>(
  "registryType",
  {
    description: {
      type: DataTypes.STRING(10),
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
  },
  { schema: "CUENTAS" }
);

export default registryType;
