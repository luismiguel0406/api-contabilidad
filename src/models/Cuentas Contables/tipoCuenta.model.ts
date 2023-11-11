import { DataTypes, Model } from "sequelize";
import conexion from "../../database";
import { TTipoGenerico } from "types";

const tipoCuenta = conexion.define<Model<TTipoGenerico>>(
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
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terminal: {
      type: DataTypes.STRING,
    },
  },
  { schema: "CUENTAS" }
);

export default tipoCuenta;
