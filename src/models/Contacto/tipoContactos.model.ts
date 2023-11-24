import { Model, DataTypes } from "sequelize";
import conexion from "../../database";
import clientes from "../Clientes/Cliente.model";
import proveedores from "../Proveedores/proveedores.model";
import { TTipoGenerico } from "types";

const tiposContactos = conexion.define<Model<TTipoGenerico>>(
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
