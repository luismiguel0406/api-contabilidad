import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import facturas from "../Facturacion/facturas/factura.model";

const empresa = conexion.define(
  "empresa",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    inicialesEmpresa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rnc: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    sucursal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terminal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { schema: "EMPRESA" }
);

empresa.hasMany(facturas,{foreignKey:"empresaId"})
facturas.belongsTo(empresa)

export default empresa;
