import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import Proveedores from "./Proveedores.model";

const tipoProveedor = conexion.define(
  "tipoProveedor",
  {
    tipoProveedor: {
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
  { schema: "PROVEEDORES" }
 
);


tipoProveedor.hasMany(Proveedores, { foreignKey: "tipoProveedorId"});
Proveedores.belongsTo(tipoProveedor);


export default tipoProveedor;
