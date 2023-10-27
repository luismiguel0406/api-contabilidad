import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import transaccion from "../../models/Transaccion/Transaccion.model";
import cuentasContables from "./cuentasContables.model";
import tipoRegistro from "./tipoRegistro.model";
import tipoEfecto from "./tipoEfecto.model";

const movimientoCuentas = conexion.define(
    "movimientoCuentas",
    {
       createdAt:{
        type:DataTypes.DATE,
        defaultValue: DataTypes.NOW,
       },
       cuentaId:{
        type:DataTypes.INTEGER,
        allowNull:false,
       },
       tipoRegistroId:{
        type:DataTypes.INTEGER,
        allowNull:false
       },
       tipoEfectoId:{
        type:DataTypes.INTEGER,
        allowNull:false
       },
       valor:{
        type:DataTypes.FLOAT,
        allowNull:false,
       },
       descripcion:{
        type:DataTypes.STRING,
       },
       usuario: {
        type: DataTypes.STRING,
        defaultValue:'SA'
      },
      terminal: {
        type: DataTypes.STRING,
        defaultValue:'SA'
      },
      referenciaId:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      transaccionId:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      saldo:{
        type:DataTypes.INTEGER,
        allowNull:false
      }
    },
    { schema: "CUENTAS" }
);

// --- ASOCIACIONES --- //
transaccion.hasMany(movimientoCuentas, {foreignKey:"transaccionId"});
movimientoCuentas.belongsTo(transaccion);

cuentasContables.hasMany(movimientoCuentas, {foreignKey:"cuentaId"});
movimientoCuentas.belongsTo(cuentasContables);

tipoRegistro.hasMany(movimientoCuentas, {foreignKey:"tipoRegistroId"});
movimientoCuentas.belongsTo(tipoRegistro);

tipoEfecto.hasMany(movimientoCuentas, { foreignKey:"tipoEfectoId"});
movimientoCuentas.belongsTo(tipoEfecto);

export default movimientoCuentas;