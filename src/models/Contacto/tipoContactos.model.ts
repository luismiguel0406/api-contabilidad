import { Model, DataTypes } from "sequelize";
import conexion from "../../database";
import clientes from "../Clientes/Cliente.model";
import suppliers from "../suppliers/suppliers.model";
import { TTypeGeneric } from "types";

const tiposContactos = conexion.define<Model<TTypeGeneric>>(
  "tipoContacto",
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
  { schema: "CONTACTOS" }
);

export default tiposContactos;
