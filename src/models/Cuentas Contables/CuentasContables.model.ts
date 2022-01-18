import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import moneda from "../Facturacion/moneda/moneda.model";

const cuentaContable = conexion.define(
  "cuentasContable",
  {
    cuenta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cuentaPadreId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    empresaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    monedaId: {
      type: DataTypes.INTEGER,
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
    },
  },
  { schema: "CUENTAS" }
);
// --- ASOCIACIONES --- //

cuentaContable.hasMany(cuentaContable, { foreignKey: "cuentaPadreId" });

moneda.hasMany(cuentaContable, { foreignKey: "monedaId" });
cuentaContable.belongsTo(moneda);

export default cuentaContable;
