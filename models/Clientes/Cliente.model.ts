import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import correos from "../Contacto/Correos.model";
import direcciones from "../Contacto/Direcciones.model";
import telefonos from "../Contacto/telefono.model";
import tiposClientes from "./tiposClientes.model";

const clientes = conexion.define(
  "cliente",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    RNC_Cedula: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
    },
    pagaItbis: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: "1",
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
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terminal: {
      type: DataTypes.STRING,
    },
  },
  { schema: "CLIENTES" }
);

clientes.sync();

clientes.hasOne(tiposClientes, {
  foreignKey: "tipoClienteId",
});
clientes.hasMany(correos, {
  foreignKey: "contactoId",
});
clientes.hasMany(telefonos, {
  foreignKey: "contactoId",
});
clientes.hasMany(direcciones, {
  foreignKey: "contactoId",
});

export default clientes;
