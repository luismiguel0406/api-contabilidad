import { DataTypes, Model } from "sequelize";
import conexion from "../../database";
import tiposContactos from "./tipoContactos.model";
import { TDireccion } from "types";

const direcciones = conexion.define<Model<TDireccion>>(
  "direccion",
  {
    distrito: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sector: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numeroEdificio: {
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
    referenciaContactoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipoContactoId: {
      type: DataTypes.INTEGER,
    },
  },
  { schema: "CONTACTOS" }
);

//--- ASOCIACIONES---//

tiposContactos.hasMany(direcciones, { foreignKey: "tipoContactoId" });
direcciones.belongsTo(tiposContactos);

export default direcciones;
