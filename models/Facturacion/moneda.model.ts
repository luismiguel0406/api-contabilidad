import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import cuentaContable from "../Cuentas Contables/CuentasContables.model";

const moneda = conexion.define(
  "moneda",
  {
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    simbolo: {
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
  },
  { schema: "FACTURACION"}
);

moneda.hasMany(cuentaContable,{foreignKey:"monedaId"})
cuentaContable.belongsTo(moneda);

export default moneda;
