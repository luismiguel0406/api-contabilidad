import empresas from "../Empresa/empresa.model";
import { DataTypes, Model } from "sequelize";
import conexion from "../../Database/connectionDB";
import moneda from "../Facturacion/moneda/moneda.model";
import tipoCuenta from "./tipoCuenta.model";
import { IGrupoCuentaContable } from "interfaces/cuentaContable.interface";

const grupoCuenta = conexion.define<Model<IGrupoCuentaContable>>(
  "grupoCuenta",
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

tipoCuenta.hasMany(grupoCuenta, {
  foreignKey: "tipoCuentaContableId",
});
grupoCuenta.belongsTo(tipoCuenta);

moneda.hasMany(grupoCuenta, { foreignKey: "monedaId" });
grupoCuenta.belongsTo(moneda);

export default grupoCuenta;
