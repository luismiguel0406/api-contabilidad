import { DataTypes, Model } from "sequelize";
import conexion from "../../database";
import tipoProveedor from "./tipoProveedores.model";
import { TProveedor } from "types";
import tipoDocumento from "./tipoDocumento.model";
import tipoServicio from "./tipoServicio.model";
import entidadBancaria from "./entidadBancaria.model";

const proveedores = conexion.define<Model<TProveedor>>(
  "proveedor",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipoProveedorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipoDocumentoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    documento: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipoServicioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    entidadBancariaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    entidadBancariaOpcionalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    numeroCuenta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numeroCuentaOpcional: {
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
  },
  { schema: "PROVEEDORES" }
);

//--- ASOCIACIONES---//

tipoProveedor.hasMany(proveedores, { foreignKey: "tipoProveedorId" });
proveedores.belongsTo(tipoProveedor);

tipoDocumento.hasMany(proveedores, { foreignKey: "tipoDocumentoId" });
proveedores.belongsTo(tipoDocumento);

tipoServicio.hasMany(proveedores, { foreignKey: "tipoServicioId" });
proveedores.belongsTo(tipoServicio);

entidadBancaria.hasMany(proveedores, { foreignKey: "entidadBancariaId" });
proveedores.belongsTo(entidadBancaria);

export default proveedores;
