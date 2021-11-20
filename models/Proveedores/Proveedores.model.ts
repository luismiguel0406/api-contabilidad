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
Proveedores.sync({force:true})
//----------  ASOCIACIONES ------------//

Proveedores.hasMany(correos, { foreignKey: "contactoId" });
correos.belongsTo(Proveedores, { as: "contacto" });

Proveedores.hasMany(telefonos, { foreignKey: "contactoId" });
telefonos.belongsTo(Proveedores, { as: "contacto" });

Proveedores.hasMany(direcciones, { foreignKey: "contactoId" });
direcciones.belongsTo(Proveedores, { as: "contacto" });

export default Proveedores;
