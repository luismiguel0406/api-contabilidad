import { DataTypes, Model } from "sequelize";
import conexion from "../../database";
import { TTypeGeneric } from "types";

const effectType = conexion.define<Model<TTypeGeneric>>(
  "effectType",
  {
    description: {
      type: DataTypes.STRING(15),
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
      allowNull: false,
    },
  },
  { schema: "CUENTAS" }
);

export default effectType;
