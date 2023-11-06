import { DataTypes, Model } from "sequelize";
import conexion from "../../Database";
import { TTipoGenerico } from "types";

const tipoEfecto = conexion.define<Model<TTipoGenerico>>(
  "tipoEfecto",
  {
    descripcion: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
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
  },
  { schema: "CUENTAS" }
);

export default tipoEfecto;
