import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import clientes from "../Clientes/Cliente.model";

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
    }
  },
  { schema: "CONTACTOS" }

);

tiposContactos.sync();


tiposContactos.hasMany(clientes,
  {foreignKey:'tipoContactoId'});
  clientes.belongsTo(tiposContactos);

  

export default tiposContactos;