import { DataTypes, Model } from "sequelize";
import conexion from "../../Database/connectionDB";
import { ITipoCuentaContable } from "interfaces/cuentaContable.interface";

const tipoCuenta = conexion.define<Model<ITipoCuentaContable>>(
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
