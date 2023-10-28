import tipoCuenta from "../Cuentas Contables/tipoCuenta.model";
import transaccion from "../Transaccion/Transaccion.model";
import { DataTypes, Model } from "sequelize";
import conexion from "../../Database/connectionDB";
import { IAccionContable } from "interfaces/entradaContable.interface";

const accionesEntradasContables = conexion.define<Model<IAccionContable>>(
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

transaccion.belongsToMany(tipoCuenta, {
  through: "accionEntradaContable",
  foreignKey: "transaccionId",
});
tipoCuenta.belongsToMany(transaccion, {
  through: "accionEntradaContable",
  foreignKey: "tipoCuentaId",
});

export default accionesEntradasContables;
