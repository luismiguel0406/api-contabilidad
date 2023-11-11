import { DataTypes, Model } from "sequelize";
import conexion from "../../database";
import { TTipoGenerico } from "types";

const tipoRegistro = conexion.define<Model<TTipoGenerico>>(
  "tipoRegistro",
  {
    descripcion: {
      type: DataTypes.STRING(10),
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
    },
  },
  { schema: "CUENTAS" }
);

export default tipoRegistro;
