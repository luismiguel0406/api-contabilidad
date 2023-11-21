import { DataTypes } from "sequelize";
import conexion from "../../database";
import clientes from "../Clientes/Cliente.model";
import proveedores from "../Proveedores/proveedores.model";
import tiposContactos from "./tipoContactos.model";

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
    clienteId: {
      type: DataTypes.INTEGER,
    },
    proveedorId: {
      type: DataTypes.INTEGER,
    },
    tipoContactoId: {
      type: DataTypes.INTEGER,
    },
  },
  { schema: "CONTACTOS" }
);
//--- ASOCIACIONES---//
clientes.hasMany(correos, { foreignKey: "clienteId" });
correos.belongsTo(clientes);

proveedores.hasMany(correos, { foreignKey: "proveedorId" });
correos.belongsTo(proveedores);

tiposContactos.hasMany(correos, { foreignKey: "tipoContactoId" });
correos.belongsTo(tiposContactos);

export default correos;
