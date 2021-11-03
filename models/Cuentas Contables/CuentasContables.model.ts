import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";

const cuentaContable = conexion.define(
  "cuentasContable",
  {
    cuenta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idCuentaPadre: {
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
    idMoneda: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
      type: DataTypes.DATE
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terminal: {
      type: DataTypes.STRING
    
    },
  },
  { schema: "CUENTAS" }
);

export default cuentaContable;
