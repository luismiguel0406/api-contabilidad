import { DataTypes, Model } from "sequelize";
import conexion from "../../../database";
import { TTypeGeneric } from "types";

const paymentMethod = conexion.define<Model<TTypeGeneric>>(
  "paymentMethod",
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
  { schema: "FACTURACION" }
);

export default paymentMethod;
