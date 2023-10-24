import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import os from "os"

const movimientoCuentas = conexion.define(
    "movimientoCuentas",
    {
       createdAt:{
        type:DataTypes.DATE,
        defaultValue: DataTypes.NOW,
       },
       cuenta:{
        type:DataTypes.STRING,
        allowNull:false,
       },
       tipoRegistroId:{
        type:DataTypes.NUMBER,
        allowNull:false
       },
       monto:{
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
        defaultValue:os.hostname()
      },
      referenciaId:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      transaccionId:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      saldoResultante:{
        type:DataTypes.INTEGER,
        allowNull:false
      }
    },
    { schema: "CUENTAS" }
);
    export default movimientoCuentas;