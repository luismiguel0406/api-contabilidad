import { DataTypes } from "sequelize";
import conexion from "../../../Database/connectionDB";
import facturas from "../facturas/factura.model";
import impuestos from "./impuestos.model";

const detallesImpuesto = conexion.define("detalleImpuesto", {
  facturaId: {
    type: DataTypes.NUMBER,
  },
  impuestoId: {
    type: DataTypes.NUMBER,
  },
  valor:{
      type:DataTypes.NUMBER,
      defaultValue: 0
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
});

impuestos.belongsToMany(facturas,{through:'detalleImpuesto'});
facturas.belongsToMany(impuestos,{through:'detalleImpuesto'});

export default detallesImpuesto;
