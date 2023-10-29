import empresas from "../Empresa/empresa.model";
import { DataTypes, Model } from "sequelize";
import conexion from "../../Database/connectionDB";
import tipoCuenta from "./tipoCuenta.model";
import grupoCuenta from "./grupoCuenta.model";
import moneda from "../../models/Facturacion/moneda/moneda.model";
import { TCuentaContable } from "types";


const cuentasContables = conexion.define<Model<TCuentaContable>>(
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
      defaultValue: DataTypes.NOW,
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
    tipoCuentaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    grupoCuentaId: {
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
  foreignKey: "tipoCuentaId",
});
cuentasContables.belongsTo(tipoCuenta);

grupoCuenta.hasMany(cuentasContables, {
  foreignKey: "grupoCuentaId",
});
cuentasContables.belongsTo(grupoCuenta);

empresas.hasMany(cuentasContables, { foreignKey: "empresaId" });
cuentasContables.belongsTo(empresas);

moneda.hasMany(cuentasContables, { foreignKey: "monedaId" });
cuentasContables.belongsTo(moneda);

export default cuentasContables;
