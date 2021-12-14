import { DataTypes } from "sequelize";
import conexion from "../../../Database/connectionDB";

const tipoVentas = conexion.define(
  "tipoVenta",
  {
    descripcion: {
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
      type: DataTypes.STRING,
      allowNull: false,
    },
    terminal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipoItemId: {
      type: DataTypes.INTEGER,
    },
  },
  { schema: "FACTURACION" }
);
export default tipoVentas;
