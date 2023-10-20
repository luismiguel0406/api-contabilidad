import empresas from "../Empresa/empresa.model";
import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import tipoCuenta from "./tipoCuenta.model";
import grupoCuenta from "./grupoCuenta.model";
import moneda from "../../models/Facturacion/moneda/moneda.model";

const cuentasContables = conexion.define(
  "cuentaContable",
  {
    noCuenta: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
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
      allowNull: false,
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terminal: {
      type: DataTypes.STRING,
    },
    tipoCuentaContableId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    grupoCuentasContableId: {
      type: DataTypes.INTEGER,
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
  },
  { schema: "CUENTAS" }
);

//---- ASOCIACIONES -------//

tipoCuenta.hasMany(cuentasContables, {
  foreignKey: "tipoCuentaContableId",
});
cuentasContables.belongsTo(tipoCuenta);

grupoCuenta.hasMany(cuentasContables, {
  foreignKey: "grupoCuentasContableId",
});
cuentasContables.belongsTo(grupoCuenta);

empresas.hasMany(cuentasContables, { foreignKey: "empresaId" });
cuentasContables.belongsTo(empresas);

moneda.hasMany(cuentasContables, { foreignKey: "monedaId" });
cuentasContables.belongsTo(moneda);

export default cuentasContables;
