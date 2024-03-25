import { DataTypes } from "sequelize";
import conexion from "../../../database";
import clientes from "../../Clientes/Cliente.model";
import empresa from "../../Empresa/empresa.model";
import mediosDePago from "../PaymentMethod/paymentMethod.model";
import currency from "../currency/currency.model";
import tiposVenta from "../ventas/tipoVentas.model";

const facturas = conexion.define(
  "factura",
  {
    noFactura: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    Ncf: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    subTotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    totalDescuentos: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
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
    fechaVencimiento: {
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
    empresaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    clienteId: {
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
    tipoVentaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { schema: "FACTURACION" }
);

//--- ASOCIACIONES---//

clientes.hasMany(facturas, { foreignKey: "clienteId" });
facturas.belongsTo(clientes);

currency.hasMany(facturas, { foreignKey: "monedaId" });
facturas.belongsTo(currency);

empresa.hasMany(facturas, { foreignKey: "empresaId" });
facturas.belongsTo(empresa);

mediosDePago.hasMany(facturas, { foreignKey: "medioDePagoId" });
facturas.belongsTo(mediosDePago);

tiposVenta.hasMany(facturas, { foreignKey: "tipoVentaId" });
facturas.belongsTo(tiposVenta);

export default facturas;
