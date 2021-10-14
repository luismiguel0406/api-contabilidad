import { DataTypes } from "sequelize";
import conexion from "./../Database/connectionDB";

const cuentasContablesPadres = conexion.define(
  "cuentasContablesPadres",
  {
    noCuenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idEmpresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE  
    },
    updatedAt: {
      type: DataTypes.DATE    
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terminal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { schema: "CUENTAS" }
);

export default cuentasContablesPadres;