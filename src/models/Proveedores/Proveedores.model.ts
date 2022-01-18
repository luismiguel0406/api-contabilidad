import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import tipoProveedor from "./tipoProveedores.model";

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

//--- ASOCIACIONES---// 

tipoProveedor.hasMany(Proveedores, { foreignKey: "tipoProveedorId"});
Proveedores.belongsTo(tipoProveedor);

export default Proveedores;
