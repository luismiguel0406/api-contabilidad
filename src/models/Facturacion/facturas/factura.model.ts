import { DataTypes } from "sequelize";
import conexion from "../../../Database/connectionDB";
import clientes from "../../Clientes/Cliente.model";
import empresa from "../../Empresa/empresa.model";
import mediosDePago from "../medioDePago/medioDePago.model";
import moneda from "../moneda/moneda.model";

const facturas = conexion.define(
  "factura",
  {
    numeroFactura: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Ncf: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    NcfModificado: {
      type: DataTypes.STRING(20),
    },
    subTotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    descuento: {
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
    medioPagoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  { schema: "FACTURACION" }
);

//--- ASOCIACIONES---//

clientes.hasMany(facturas, { foreignKey: "clienteId" });
facturas.belongsTo(clientes);

moneda.hasMany(facturas, { foreignKey: "monedaId" });
facturas.belongsTo(moneda);

empresa.hasMany(facturas, { foreignKey: "empresaId" });
facturas.belongsTo(empresa);

mediosDePago.hasMany(facturas, { foreignKey: "medioPagoId" });
facturas.belongsTo(mediosDePago);

export default facturas;