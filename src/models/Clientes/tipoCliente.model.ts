import { DataTypes, Model } from "sequelize";
import conexion from "../../Database/connectionDB";
import { TTipoCliente } from "types";

const tipoCliente = conexion.define<Model<TTipoCliente>>(
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

export default tipoCliente;
