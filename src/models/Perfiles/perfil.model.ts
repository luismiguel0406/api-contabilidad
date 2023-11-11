import { DataTypes } from "sequelize";
import conexion from "../../database";

const perfil = conexion.define(
  "perfil",
  {
    descripcion: {
      type: DataTypes.STRING(50),
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
  },
  { schema: "USUARIOS" }
);

export default perfil;
