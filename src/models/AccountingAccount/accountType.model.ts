import { DataTypes, Model } from "sequelize";
import conexion from "../../database";
import { TTypeGeneric } from "types";

const accountType = conexion.define<Model<TTypeGeneric>>(
  "accountType",
  {
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
  },
  { schema: "CUENTAS" }
);

export default accountType;
