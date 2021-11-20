import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import clientes from "./Cliente.model";

const tipoCliente = conexion.define(
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

tipoCliente.hasMany(clientes,{
  foreignKey:'tipoClienteId' 
});
clientes.belongsTo(tipoCliente,{as:"tipoCliente"});

export default tipoCliente;
