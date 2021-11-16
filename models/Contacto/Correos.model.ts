import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import empresa from "../Empresa/empresa.model";

const correos = conexion.define(
  "correo",
  {
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
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
     contactoId:{
      type:DataTypes.INTEGER
    }
  },
  { schema: "CONTACTOS"}
);

correos.sync();

export default correos;
