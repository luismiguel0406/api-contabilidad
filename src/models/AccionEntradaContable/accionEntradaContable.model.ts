
import tiposCuentaContable from "../Cuentas Contables/tipoCuentaContable.model";
import transaccionesComerciales from "../TransaccionesComerciales/TransaccionesComerciales.model";
import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";

const accionesEntradasContables = conexion.define("accionEntradaContable",{

  transaccionId:{
      type:DataTypes.INTEGER,
      allowNull:false
  },
  tipoCuentaId:{
      type:DataTypes.INTEGER,
      allowNull:false,
  },
  accion:{
     type:DataTypes.STRING,
     allowNull:false
  },
  movimiento:{
   type:DataTypes.STRING,
   allowNull:false
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

},{schema:"DIARIO"})


//ASOCIACIONES//


transaccionesComerciales.belongsToMany(tiposCuentaContable,{through:"accionEntradaContable",foreignKey:"transaccionId"})
tiposCuentaContable.belongsToMany(transaccionesComerciales,{through:"accionEntradaContable", foreignKey:"tipoCuentaId"})


export default accionesEntradasContables