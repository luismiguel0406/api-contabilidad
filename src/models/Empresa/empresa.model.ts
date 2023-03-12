import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";

const empresas = conexion.define(
  "empresa",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alias: {
      type: DataTypes.STRING,
    },
    rnc: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true,
    },
    sucursalId: {
      type: DataTypes.INTEGER,
    },
    planId:{
      type:DataTypes.INTEGER,
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
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terminal: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  { schema: "EMPRESA" }
);
 
//empresas.sync()
export default empresas;
