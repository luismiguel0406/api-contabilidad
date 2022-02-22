import empresas from "../../Empresa/empresa.model";
import Proveedores from "../../Proveedores/Proveedores.model";
import { DataTypes } from "sequelize";
import conexion from "../../../Database/connectionDB";
import mediosDePago from "../medioDePago/medioDePago.model";
import moneda from "../moneda/moneda.model";
import tipoGasto from "./Gastos/gastos.model";
import tipoFacturasPorPagar from "./tiposFacturasPorPagar/tiposFacturasPorPagar.model";


const facturasPorPagar = conexion.define(
  "facturaPorPagar",
  {
    noFactura: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    Ncf: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    ncfModificado: {//n minuscula
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
      defaultValue: 0,
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
      defaultValue: 1,
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
      defaultValue: 1,
    },
    tipoGastoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { schema: "FACTURACION" }
);

//-------ASOCIACIONES-------//

tipoFacturasPorPagar.hasMany(facturasPorPagar, { foreignKey: "tipoFacturasPorPagarId" });
facturasPorPagar.belongsTo(tipoFacturasPorPagar);

empresas.hasMany(facturasPorPagar, { foreignKey: "empresaId" });
facturasPorPagar.belongsTo(empresas);

Proveedores.hasMany(facturasPorPagar, { foreignKey: "proveedorId" });
facturasPorPagar.belongsTo(Proveedores);

moneda.hasMany(facturasPorPagar, { foreignKey: "monedaId" });
facturasPorPagar.belongsTo(moneda);

mediosDePago.hasMany(facturasPorPagar, { foreignKey: "medioDePagoId" });
facturasPorPagar.belongsTo(mediosDePago);

tipoGasto.hasMany(facturasPorPagar, { foreignKey: "tipoGastoId" });
facturasPorPagar.belongsTo(tipoGasto);

export default facturasPorPagar;
