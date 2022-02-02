import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";

const tiposCuentaContable = conexion.define(
  "tipoCuentaContable",
  {
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    credito: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    debito: {
      type: DataTypes.STRING(25),
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

export default tiposCuentaContable;
