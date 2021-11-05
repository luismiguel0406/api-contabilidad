import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";

const tiposClientes = conexion.define(
  "tipoCliente",
  {
    descripcion: {
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
  },
  {
    schema: "CLIENTES"
   
  }
);

tiposClientes.sync();
export default tiposClientes;
