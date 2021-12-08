import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";

const telefonos = conexion.define(
  "telefono",
  {
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terminal: {
      type: DataTypes.STRING,
    },
    clienteId:{
      type:DataTypes.INTEGER
    },
    proveedorId:{
      type:DataTypes.INTEGER
    },
    tipoContactoId: {
      type: DataTypes.INTEGER,
    },
  },
  { schema: "CONTACTOS" }
);

export default telefonos;
