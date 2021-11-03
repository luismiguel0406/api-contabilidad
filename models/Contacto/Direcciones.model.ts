import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";

const direcciones = conexion.define(
  "direccion",
  {
    direccion: {
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
  { schema: "CONTACTOS", tableName: "Direcciones" }
);

direcciones.sync();
export default direcciones;