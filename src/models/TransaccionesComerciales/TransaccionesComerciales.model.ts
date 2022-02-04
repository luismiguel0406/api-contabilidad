import { DataTypes } from "sequelize"
import conexion from "../../Database/connectionDB"

const transaccionesComerciales = conexion.define("transaccionesPayload",{

    descripcion:{
        type:DataTypes.STRING,
        allowNull:false,
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
      }   
})


export default transaccionesComerciales;