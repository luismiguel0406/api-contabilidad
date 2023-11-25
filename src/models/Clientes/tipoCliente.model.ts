import { DataTypes, Model } from "sequelize";
import conexion from "../../database";
import { TTypeGeneric } from "types";

const tipoCliente = conexion.define<Model<TTypeGeneric>>(
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
    schema: "CLIENTES",
  }
);

export default tipoCliente;
