import { BelongsTo, DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import clientes from "../Clientes/Cliente.model";
import Proveedores from "../Proveedores/Proveedores.model";
import correos from "./Correos.model";
import direcciones from "./Direcciones.model";
import telefonos from "./telefono.model";

const tiposContactos = conexion.define(
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
    }
  },
  { schema: "CONTACTOS" }

);

//--------- ASOCIACIONES ---------//

tiposContactos.hasMany(clientes, { foreignKey: "tipoContactoId" });
clientes.belongsTo(tiposContactos);

tiposContactos.hasMany(Proveedores,{foreignKey:"tipoContactoId"})
Proveedores.belongsTo(tiposContactos)

tiposContactos.hasMany(correos, { foreignKey: "tipoContactoId" });
correos.belongsTo(tiposContactos);

tiposContactos.hasMany(direcciones, {foreignKey:"tipoContactoId"});
direcciones.belongsTo(tiposContactos);

tiposContactos.hasMany(telefonos,{foreignKey: "tipoContactoId"});
telefonos.belongsTo(tiposContactos)




export default tiposContactos;