import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";

const tiposContactos = conexion.define(
  "tipoContactos",
  {
    tipoContacto: {
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
  { schema: "CONTACTOS", tableName: "tiposContactos" }

);

tiposContactos.sync();

export default tiposContactos;