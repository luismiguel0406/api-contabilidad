import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";

const tipoCuenta = conexion.define(
  "tipoCuenta",
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
  },
  { schema: "CUENTAS" }
);

export default tipoCuenta;
