import tipoCuenta from "../AccountingAccount/accountType.model";
import transaction from "../Transaction/Transaction.model";
import { DataTypes, Model } from "sequelize";
import conexion from "../../database";
import { TAccionEntradaContable } from "types";

const accionesEntradasContables = conexion.define<
  Model<TAccionEntradaContable>
>(
  "accionEntradaContable",
  {
    transaccionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipoCuentaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipoEfectoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipoRegistroId: {
      type: DataTypes.INTEGER,
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
    },
  },
  { schema: "DIARIO" }
);

//ASOCIACIONES//

transaction.belongsToMany(tipoCuenta, {
  through: "accionEntradaContable",
  foreignKey: "transaccionId",
});
tipoCuenta.belongsToMany(transaction, {
  through: "accionEntradaContable",
  foreignKey: "tipoCuentaId",
});

export default accionesEntradasContables;
