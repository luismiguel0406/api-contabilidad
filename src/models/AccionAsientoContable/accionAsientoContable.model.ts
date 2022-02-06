
import tiposCuentaContable from "models/Cuentas Contables/tipoCuentaContable.model";
import transaccionesComerciales from "models/TransaccionesComerciales/TransaccionesComerciales.model";
import { DataTypes } from "sequelize/types";
import conexion from "../../Database/connectionDB";

const accionesAsientoContables = conexion.define("accionAsientoCntable",{

  transaccionId:{
      type:DataTypes.INTEGER,
      allowNull:false
  },
  tipoCuentaId:{
      type:DataTypes.INTEGER,
      allowNull:false,
  },
  accion:{
     type:DataTypes.INTEGER,
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
  }

},{schema:"ASIENTOS"})


//ASOCIACIONES//

transaccionesComerciales.belongsToMany(tiposCuentaContable,{through:"accionAsientoCntable",foreignKey:"transaccionId"})
tiposCuentaContable.belongsToMany(transaccionesComerciales,{through:"accionAsientoCntable", foreignKey:"tipoCuentaId"})


export default accionesAsientoContables