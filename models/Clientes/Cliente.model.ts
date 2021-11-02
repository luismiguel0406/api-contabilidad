import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import tiposClientes from "./tiposClientes.model";

const clientes = conexion.define(
  "cliente",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    RNC: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
    },
    pagaItbis: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: "1",
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
  },
  { schema: "CLIENTES" ,
   tableName:"clientes"}

);

clientes.sync({force:true})
clientes.hasOne(tiposClientes,{
    foreignKey:'tipoClienteId',   
})

export default clientes;
