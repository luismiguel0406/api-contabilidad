import { DataTypes } from "sequelize";
import { Hooks } from "sequelize/types/lib/hooks";
import conexion from "../../Database/connectionDB";
import { encryptar } from "../../lib/validaciones/encryptaPw";
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
  {
    hooks: {
      beforeCreate: (data: any, options) => {
        data.dataValues.contrasena = encryptar(data.dataValues.contrasena);
      },
    },
    schema: "USUARIOS",
  }
);

empresas.hasMany(usuarios, { foreignKey: "empresaId" });
usuarios.belongsTo(empresas);

export default usuarios;
