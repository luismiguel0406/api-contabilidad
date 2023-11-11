import { DataTypes } from "sequelize";
import conexion from "../../database";

const transaccion = conexion.define(
  "transaccion",
  {
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    payload: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
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
    usuario: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    terminal: {
      type: DataTypes.STRING,
    },
  },
  { schema: "DIARIO" }
);

export default transaccion;
