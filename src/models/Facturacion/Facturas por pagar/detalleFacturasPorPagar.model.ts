import cuentasContables from "../../Cuentas Contables/cuentasContables.model";
import { DataTypes } from "sequelize";
import conexion from "../../../Database/connectionDB";
import facturasPorPagar from "./facturasPorPagar.model";

const detalleFacturasPorPagar = conexion.define(
  "detalleFacturaPorPagar",
  {
    descripcionCuenta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    detalleImpuesto: {
      type: DataTypes.JSONB,
    },
    facturaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cuentaContableId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { schema: "FACTURACION" }
);

//---ASOCIACIONES---//

facturasPorPagar.hasMany(detalleFacturasPorPagar, { foreignKey: "facturaId" });
detalleFacturasPorPagar.belongsTo(facturasPorPagar);

cuentasContables.hasMany(detalleFacturasPorPagar, { foreignKey: "cuentaContableId" });
detalleFacturasPorPagar.belongsTo(cuentasContables);

export default detalleFacturasPorPagar;
