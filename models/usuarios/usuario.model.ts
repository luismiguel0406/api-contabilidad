import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import empresas from "../Empresa/empresa.model";

const usuarios = conexion.define(
  "usuario",
  {
    nombreUsuario: {
      type: DataTypes.STRING(50),
    },
    contrasena: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING(50),
      validate: {
        isEmail: true,
      },
    },
    empresaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { schema: "USUARIOS" }
);

empresas.hasMany(usuarios, { foreignKey: "empresaId" });
usuarios.belongsTo(empresas);

export default usuarios;
