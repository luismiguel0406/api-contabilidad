import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import { Encryptar } from "../../lib/validaciones/encryptaPw";
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
  },
  {
    schema: "USUARIOS",
    /*hooks: {
      beforeCreate: async (data: any, options) => {
        data.dataValues.contrasena = await encryptar(data.dataValues.contrasena);
      },
    },*/
  }
);


  usuarios.beforeCreate(async(data:any,options)=>{
  const encryptada = await Encryptar(data.contrasena);
  data.contrasena = encryptada;
})
empresas.hasMany(usuarios, { foreignKey: "empresaId" });
usuarios.belongsTo(empresas);

export default usuarios;
