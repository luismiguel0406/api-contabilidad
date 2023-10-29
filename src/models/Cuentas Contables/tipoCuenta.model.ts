import { DataTypes, Model } from "sequelize";
import conexion from "../../Database/connectionDB";
import { TTipoCuentaContable } from "types";

const tipoCuenta = conexion.define<Model<TTipoCuentaContable>>(
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
