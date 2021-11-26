import { DataTypes, ForeignKeyConstraintError } from "sequelize";
import conexion from "../../Database/connectionDB";
import correos from "../Contacto/Correos.model";
import direcciones from "../Contacto/Direcciones.model";
import telefonos from "../Contacto/telefono.model";

const Proveedores = conexion.define(
  "proveedor",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    RNC_Cedula: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
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
    tipoContactoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipoProveedorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { schema: "PROVEEDORES" }
);

//----------  ASOCIACIONES ------------//

Proveedores.hasMany(correos, { foreignKey: "contactoId" });
correos.belongsTo(Proveedores);

Proveedores.hasMany(telefonos, { foreignKey: "contactoId" });
telefonos.belongsTo(Proveedores);

Proveedores.hasMany(direcciones, { foreignKey: "contactoId" });
direcciones.belongsTo(Proveedores);

export default Proveedores;
