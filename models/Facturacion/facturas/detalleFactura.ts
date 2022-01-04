import { DataTypes } from "sequelize";
import conexion from "../../../Database/connectionDB";
import item from "../../Inventario/Item.model";
import facturas from "./factura.model";

const detallesFactura = conexion.define(
  "detalleFactura",
  {
    facturaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    itemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    precioVenta: {
      type: DataTypes.DECIMAL,
    },
    descuento: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
    },
    total: {
      type: DataTypes.INTEGER,
    },/*
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
    },*/
  },
  { schema: "FACTURACION" }
);

//--- ASOCIACIONES---//

item.hasMany(detallesFactura, { foreignKey: "itemId" });
detallesFactura.belongsTo(item);

facturas.hasMany(detallesFactura, { foreignKey: "facturaId" });
detallesFactura.belongsTo(facturas);

export default detallesFactura;
