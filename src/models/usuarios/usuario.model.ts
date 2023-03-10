import perfil from "../../models/Perfiles/perfil.model";
import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import { Encryptar } from "../../lib/validaciones/encryptaPw";
import empresas from "../Empresa/empresa.model";

const usuarios = conexion.define(
  "usuario",
  {
    nombreUsuario: {
      type: DataTypes.STRING(50),
      unique:true
    },
    contrasena: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      validate: {
        isEmail: true,
      },
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
    empresaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    perfilId:{
      type:DataTypes.INTEGER,
     // allowNull:false
    }
  },
  {
    schema: "USUARIOS",
  }
);

usuarios.beforeCreate(async (data: any) => {
  const encryptada = await Encryptar(data.contrasena);
  data.contrasena = encryptada;
});

//------- ASOCIACIONES -------//

empresas.hasMany(usuarios, { foreignKey: "empresaId" });
usuarios.belongsTo(empresas);

perfil.hasMany(usuarios,{foreignKey:"perfilId"});
usuarios.belongsTo(perfil)

export default usuarios;
