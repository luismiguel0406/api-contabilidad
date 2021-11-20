import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import correos from "../Contacto/Correos.model";
import direcciones from "../Contacto/Direcciones.model";
import telefonos from "../Contacto/telefono.model";

const clientes = conexion.define(
  "clientes",
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
    tipoContactoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipoClienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { schema: "CLIENTES" }
);

clientes.hasMany(correos, {
 foreignKey: "contactoId",
});
correos.belongsTo(clientes, { as: "contacto" });
//-----------------------------------//
clientes.hasMany(telefonos, {
  foreignKey: "contactoId",
});
telefonos.belongsTo(clientes, { as: "contacto" });
//------------------------------------//
clientes.hasMany(direcciones, {
  foreignKey: "contactoId",
});
direcciones.belongsTo(clientes, { as: "contacto" });

export default clientes;
