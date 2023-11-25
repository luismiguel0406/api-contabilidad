import { DataTypes } from "sequelize";
import conexion from "../../database";
import clientes from "../Clientes/Cliente.model";
import suppliers from "../suppliers/suppliers.model";
import tiposContactos from "./tipoContactos.model";

const telefonos = conexion.define(
  "telefono",
  {
    telefono: {
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

clientes.hasMany(telefonos, { foreignKey: "clienteId" });
telefonos.belongsTo(clientes);

suppliers.hasMany(telefonos, { foreignKey: "proveedorId" });
telefonos.belongsTo(suppliers);

tiposContactos.hasMany(telefonos, { foreignKey: "tipoContactoId" });
telefonos.belongsTo(tiposContactos);

export default telefonos;
