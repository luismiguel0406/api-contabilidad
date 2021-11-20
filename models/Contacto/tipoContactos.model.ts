import { BelongsTo, DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import clientes from "../Clientes/Cliente.model";
import correos from "./Correos.model";
import direcciones from "./Direcciones.model";
import telefonos from "./telefono.model";

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

//--------- ASOCIACIONES ---------//

tiposContactos.hasMany(clientes, { foreignKey: "tipoContactoId" });
clientes.belongsTo(tiposContactos,{as: "tipoContacto"});

tiposContactos.hasMany(correos, { foreignKey: "tipoContactoId" });
correos.belongsTo(tiposContactos, {as: "tipoContacto"});

tiposContactos.hasMany(direcciones, {foreignKey:"tipoContactoId"});
direcciones.belongsTo(tiposContactos, {as: "tipoContacto"});

tiposContactos.hasMany(telefonos,{foreignKey: "tipoContactoId"});
telefonos.belongsTo(tiposContactos, {as: "tipoContacto"})


export default tiposContactos;