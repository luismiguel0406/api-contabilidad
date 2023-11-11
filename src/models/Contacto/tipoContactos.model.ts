import { Model, DataTypes } from "sequelize";
import conexion from "../../database";
import clientes from "../Clientes/Cliente.model";
import Proveedores from "../Proveedores/Proveedores.model";
import { TTipoGenerico } from "types";

const tiposContactos = conexion.define<Model<TTipoGenerico>>(
  "tipoContactos",
  {
    descripcion: {
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
  { schema: "CONTACTOS" }
);

//--------- ASOCIACIONES ---------//--verificar

tiposContactos.hasMany(clientes, { foreignKey: "tipoContactoId" });
clientes.belongsTo(tiposContactos);

tiposContactos.hasMany(Proveedores, { foreignKey: "tipoContactoId" });
Proveedores.belongsTo(tiposContactos);

export default tiposContactos;
