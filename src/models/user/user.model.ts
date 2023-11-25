import conexion from "../../database";
import { DataTypes, Model } from "sequelize";
import { Encrypt } from "../../lib/validaciones/encryptaPw";
import { TUser } from "types";
import company from "../Empresa/empresa.model";
import role from "../Perfiles/perfil.model";

const users = conexion.define<Model<TUser>>(
  "user",
  {
    username: {
      type: DataTypes.STRING(50),
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    state: {
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
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    roleId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    schema: "USUARIOS",
  }
);

users.beforeCreate(async (data: any) => {
  const encrypted = await Encrypt(data.password);
  data.password = encrypted;
});

//------- ASOCIACIONES -------//

company.hasMany(users, { foreignKey: "companyId" });
users.belongsTo(company);

role.hasMany(users, { foreignKey: "roleId" });
users.belongsTo(role);

export default users;
