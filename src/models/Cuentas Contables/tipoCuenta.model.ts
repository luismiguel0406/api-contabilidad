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
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  { schema: "CUENTAS" }
);

export default tipoCuenta;
