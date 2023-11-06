import { DataTypes } from "sequelize";
import conexion from "../../Database";
import clientes from "../Clientes/Cliente.model";
import tiposContactos from "./tipoContactos.model";

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

clientes.hasMany(direcciones, { foreignKey: "clienteId" });
direcciones.belongsTo(clientes);

tiposContactos.hasMany(direcciones, { foreignKey: "tipoContactoId" });
direcciones.belongsTo(tiposContactos);

export default direcciones;
