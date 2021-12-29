import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import correos from "../Contacto/Correos.model";
import direcciones from "../Contacto/Direcciones.model";
import telefonos from "../Contacto/telefono.model";
import facturas from "../Facturacion/facturas/factura.model";

const clientes = conexion.define(
  "clientes",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    RNC_Cedula: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
    },
    pagaItbis: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: "1",
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
    tipoClienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { schema: "CLIENTES" }
);

clientes.hasMany(correos, { foreignKey: "clienteId"});
correos.belongsTo(clientes);

clientes.hasMany(telefonos, { foreignKey: "clienteId"});
telefonos.belongsTo(clientes);

clientes.hasMany(direcciones, { foreignKey: "clienteId"});
direcciones.belongsTo(clientes);

clientes.hasMany(facturas,{foreignKey:"clienteId"});
facturas.belongsTo(clientes);

export default clientes;
