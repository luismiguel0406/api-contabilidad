import empresas from "../Empresa/empresa.model";
import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import tiposCuentaContable from "./tipoCuentaContable.model";
import grupoCuentasContables from "./grupoCuentasContables.model";
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
    empresaId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    monedaId:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
  },
  { schema: "CUENTAS" }
);

//---- ASOCIACIONES -------//

tiposCuentaContable.hasMany(cuentasContables, {
  foreignKey: "tipoCuentaContableId",
});
cuentasContables.belongsTo(tiposCuentaContable);

grupoCuentasContables.hasMany(cuentasContables, {
  foreignKey: "grupoCuentasContableId",
});
cuentasContables.belongsTo(grupoCuentasContables);

empresas.hasMany(cuentasContables, { foreignKey: "empresaId" });
cuentasContables.belongsTo(empresas);

moneda.hasMany(cuentasContables,{foreignKey:"monedaId"});
cuentasContables.belongsTo(moneda);

export default cuentasContables;
