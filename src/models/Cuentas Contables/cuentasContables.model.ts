import empresas from "../Empresa/empresa.model";
import { DataTypes } from "sequelize";
import conexion from "../../Database/connectionDB";
import tiposCuentaContable from "./tipoCuentaContable.model";
import grupoCuentasContables from "./grupoCuentasContables.model";

const cuentasContables = conexion.define("cuentaContable",{

    noCuenta:{
        type:DataTypes.STRING(25),
        allowNull:false
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull:false
    },
    estado:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    createAt:{
        type:DataTypes.DATE,
        allowNull:false
    },
    updateAt:{
        type:DataTypes.DATE,
        allowNull:false
    },
    usuario:{
        type:DataTypes.STRING,
        allowNull:false
    },
    terminal:{
        type:DataTypes.STRING,
    },

    tipoCuentaContableId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    grupoCuentaId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

//---- ASOCIACIONES -------//

tiposCuentaContable.hasMany(cuentasContables,{foreignKey:'tipoCuentaContableId'})
cuentasContables.belongsTo(tiposCuentaContable);

grupoCuentasContables.hasMany(cuentasContables,{foreignKey:'grupoCuentaId'})
cuentasContables.belongsTo(grupoCuentasContables);

empresas.hasMany(cuentasContables,{foreignKey:'empresaId'});
cuentasContables.belongsTo(empresas);


export default cuentasContables;