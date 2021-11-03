import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";

const empresa = conexion.define(
  "empresa",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    inicialesEmpresa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rnc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sucursal: {
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
    },
  },
  { schema: "EMPRESA" }
);
export default empresa;
