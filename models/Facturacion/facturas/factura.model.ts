import { DataTypes } from "sequelize";
import conexion from "../../../Database/connectionDB";
import clientes from "../../Clientes/Cliente.model";
import empresa from "../../Empresa/empresa.model";
import moneda from "../moneda/moneda.model";

const facturas = conexion.define("factura", {
  numeroFactura: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Ncf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  NcfModificado: {
    type: DataTypes.STRING,
  },
  subTotal: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  descuento: {
    type: DataTypes.NUMBER,
    allowNull: false,
    defaultValue: 0,
  },
  totalImpuestos: {
    type: DataTypes.NUMBER,
    defaultValue: 0,
  },
  total: {
    type: DataTypes.NUMBER,
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
    type: DataTypes.STRING,
    allowNull: false,
  },
  terminal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  empresaId: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  clienteId: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  monedaId: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
});

//--- ASOCIACIONES---//

clientes.hasMany(facturas, { foreignKey: "clienteId" });
facturas.belongsTo(clientes);

moneda.hasMany(facturas, { foreignKey: "monedaId" });
facturas.belongsTo(moneda);

empresa.hasMany(facturas, { foreignKey: "empresaId" });
facturas.belongsTo(empresa);

export default facturas;
