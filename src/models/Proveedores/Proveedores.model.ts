import { DataTypes, Model } from "sequelize";
import conexion from "../../database";
import tipoProveedor from "./tipoProveedores.model";
import { TProveedor } from "types";

const Proveedores = conexion.define<Model<TProveedor>>(
  "proveedor",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    documento: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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

tipoProveedor.hasMany(Proveedores, { foreignKey: "tipoProveedorId" });
Proveedores.belongsTo(tipoProveedor);

export default Proveedores;
