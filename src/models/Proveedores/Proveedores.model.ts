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
    tipoDocumentoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipoServicioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    direccionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    entidadBancariaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    documento: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numeroCuenta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    infoAdicional: {
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

//--- ASOCIACIONES---//

tipoProveedor.hasMany(Proveedores, { foreignKey: "tipoProveedorId" });
Proveedores.belongsTo(tipoProveedor);

export default Proveedores;
