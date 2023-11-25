import { DataTypes, Model } from "sequelize";
import empresas from "../../Empresa/empresa.model";
import suppliers from "../../suppliers/suppliers.model";
import conexion from "../../../database";
import mediosDePago from "../medioDePago/medioDePago.model";
import moneda from "../moneda/moneda.model";
import tipoGasto from "./Gastos/gastos.model";
import tipoFacturasPorPagar from "./tiposFacturasPorPagar/tiposFacturasPorPagar.model";
import { TFacturasPorPagar } from "types";

const facturasPorPagar = conexion.define<Model<TFacturasPorPagar>>(
  "facturaPorPagar",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    noFactura: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    Ncf: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    ncfModificado: {
      type: DataTypes.STRING(25),
    },
    subTotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    totalDescuentos: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    totalImpuestos: {
      type: DataTypes.FLOAT,
      defaultValue: 0.0,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    comentario: {
      type: DataTypes.STRING,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fechaLimitePago: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    usuario: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    terminal: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    tipoFacturasPorPagarId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    empresaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    proveedorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    monedaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    medioDePagoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipoGastoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    detalle: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
  },
  { schema: "FACTURACION" }
);

//-------ASOCIACIONES-------//

tipoFacturasPorPagar.hasMany(facturasPorPagar, {
  foreignKey: "tipoFacturasPorPagarId",
});
facturasPorPagar.belongsTo(tipoFacturasPorPagar);

empresas.hasMany(facturasPorPagar, { foreignKey: "empresaId" });
facturasPorPagar.belongsTo(empresas);

suppliers.hasMany(facturasPorPagar, { foreignKey: "proveedorId" });
facturasPorPagar.belongsTo(suppliers);

moneda.hasMany(facturasPorPagar, { foreignKey: "monedaId" });
facturasPorPagar.belongsTo(moneda);

mediosDePago.hasMany(facturasPorPagar, { foreignKey: "medioDePagoId" });
facturasPorPagar.belongsTo(mediosDePago);

tipoGasto.hasMany(facturasPorPagar, { foreignKey: "tipoGastoId" });
facturasPorPagar.belongsTo(tipoGasto);

export default facturasPorPagar;
