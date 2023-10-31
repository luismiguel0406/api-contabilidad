import { DataTypes, Model } from "sequelize";
import conexion from "../../Database/connectionDB";
import transaccion from "../../models/Transaccion/Transaccion.model";
import cuentasContables from "./cuentasContables.model";
import tipoRegistro from "./tipoRegistro.model";
import tipoEfecto from "./tipoEfecto.model";
import { TMovimientoCuentas } from "types";

const movimientoCuentas = conexion.define<Model<TMovimientoCuentas>>(
  "movimientoCuentas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
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
  { schema: "CUENTAS", timestamps: false }
);


// --- ASOCIACIONES --- //
transaccion.hasMany(movimientoCuentas, { foreignKey: "transaccionId" });
movimientoCuentas.belongsTo(transaccion);

cuentasContables.hasMany(movimientoCuentas, { foreignKey: "cuentaId" });
movimientoCuentas.belongsTo(cuentasContables);

tipoRegistro.hasMany(movimientoCuentas, { foreignKey: "tipoRegistroId" });
movimientoCuentas.belongsTo(tipoRegistro);

tipoEfecto.hasMany(movimientoCuentas, { foreignKey: "tipoEfectoId" });
movimientoCuentas.belongsTo(tipoEfecto);

export default movimientoCuentas;
