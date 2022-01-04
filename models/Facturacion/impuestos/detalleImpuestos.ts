import { DataTypes } from "sequelize";
import conexion from "../../../Database/connectionDB";
import detallesFactura from "../facturas/detalleFactura";
import impuestos from "./impuestos.model";

const detallesImpuesto = conexion.define(
  "detalleImpuesto",
  {
    detalleFacturaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    impuestoId: {
      type: DataTypes.INTEGER,
    },
    valor: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
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
  },
  { schema: "FACTURACION" }
);

//--- ASOCIACIONES---// 

detallesFactura.hasMany(detallesImpuesto, { foreignKey: "detalleFacturaId" });
detallesImpuesto.belongsTo(detallesFactura);

impuestos.hasMany(detallesImpuesto, { foreignKey: "impuestoId" });
detallesImpuesto.belongsTo(impuestos);

export default detallesImpuesto;
