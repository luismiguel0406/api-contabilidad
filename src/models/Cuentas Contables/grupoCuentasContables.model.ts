import empresas from "../Empresa/empresa.model";
import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import moneda from "../Facturacion/moneda/moneda.model";
import tiposCuentaContable from "./tipoCuentaContable.model";


const grupoCuentasContables = conexion.define(
  "grupoCuentasContable",
  {
    cuenta: {
      type: DataTypes.STRING,
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
    monedaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { schema: "CUENTAS" }
);
// --- ASOCIACIONES --- //


tiposCuentaContable.hasMany(grupoCuentasContables, { foreignKey: "tipoCuentaContableId",});
grupoCuentasContables.belongsTo(tiposCuentaContable);

moneda.hasMany(grupoCuentasContables, { foreignKey: "monedaId" });
grupoCuentasContables.belongsTo(moneda);


export default grupoCuentasContables;
