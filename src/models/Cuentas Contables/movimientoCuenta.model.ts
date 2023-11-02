import { DataTypes, Model } from "sequelize";
import conexion from "../../Database/connectionDB";
import transaccion from "../Transaccion/Transaccion.model";
import cuentasContables from "./cuentasContables.model";
import tipoRegistro from "./tipoRegistro.model";
import tipoEfecto from "./tipoEfecto.model";
import { TMovimientoCuentas } from "types";

const movimientoCuenta = conexion.define<Model<TMovimientoCuentas>>(
  "movimientoCuenta",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull:false
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    cuentaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipoRegistroId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipoEfectoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    usuario: {
      type: DataTypes.STRING,
      defaultValue: "SA",
    },
    terminal: {
      type: DataTypes.STRING,
      defaultValue: "SA",
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    referenciaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    transaccionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    saldo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { schema: "CUENTAS" }
);

// --- ASOCIACIONES --- //
transaccion.hasMany(movimientoCuenta, { foreignKey: "transaccionId" });
movimientoCuenta.belongsTo(transaccion);

cuentasContables.hasMany(movimientoCuenta, { foreignKey: "cuentaId" });
movimientoCuenta.belongsTo(cuentasContables);

tipoRegistro.hasMany(movimientoCuenta, { foreignKey: "tipoRegistroId" });
movimientoCuenta.belongsTo(tipoRegistro);

tipoEfecto.hasMany(movimientoCuenta, { foreignKey: "tipoEfectoId" });
movimientoCuenta.belongsTo(tipoEfecto);

export default movimientoCuenta;
