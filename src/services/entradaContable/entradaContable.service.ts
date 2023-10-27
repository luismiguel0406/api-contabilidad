import os from 'os'
import entradaContableModel from "../../models/EntradaContable/entradaContable.model";
import accionEntradaContableModel from "../../models/AccionEntradaContable/accionEntradaContable.model";
import movimientoCuentasModel from '../../models/Cuentas Contables/movimientoCuentas.model';
import TransaccionService from "../transaccion/transaccion.service";
import determinarEntradaContable from "../../helpers";
import { IDataEntradaContable, IEntradaContable, IEntradaContableDetalle } from "interfaces/entradaContable.interface";
import { IMovimientoCuentas } from 'interfaces/cuentaContable.interface';
export default class EntradaContableService {

  private _transaccionId: number = 0;
  private _movimientoCuenta!:any;

    // 1- Obtengo id de la transaccion en curso

  async createEntradaContable(data:IDataEntradaContable) {

      const { payload, id, total, comentario, detalle } = data;

      const transaccion_service = new TransaccionService(); 
      const transaccion :any = await transaccion_service.getTransaccion(payload);
      this._transaccionId = transaccion?.id
  
    // 2- Busco las acciones que se haran relativa a esta transaccion

    const accionContable =<Array<any>> await accionEntradaContableModel.findAll({
      attributes:["transaccionId", "tipoCuentaId", "tipoEfectoId", "tipoRegistroId"],
      where:{ transaccionId: this._transaccionId, estado:"1"}
    })

    // 3- Identificar los tipos de registro segun accion contable

    let nuevoDetalle!:IEntradaContableDetalle[];

    for await(let details of detalle){
      let detalleSalida = accionContable.filter(item=>(item.tipoCuentaId === details.tipoCuentaId))
      const { tipoCuentaId, tipoEfectoId, tipoRegistroId, transaccionId } = detalleSalida[0];
      
      let { valor, cuentaId, descripcion } = details;
      type TDeterminacion = {
        credito: number,
        debito: number
      }
      const determinacion:TDeterminacion = determinarEntradaContable(tipoCuentaId, tipoEfectoId, valor );

      nuevoDetalle?.push({
        cuenta: details.cuenta,
        descripcion: details.descripcion,
        ...determinacion
      })

// 6- Registrar movimiento de cuenta
  // let dataMovimientoCuenta:IMovimientoCuentas = {
  //   createdAt:new Date(),
  //   cuentaId,
  //   tipoRegistroId,
  //   tipoEfectoId,
  //   valor,
  //   descripcion,
  //   referenciaId: id,
  //   transaccionId:this._transaccionId,
  //   saldo:Math.random() * 100,
  //   usuario: os.userInfo().username,
  //   terminal: os.hostname(),
  // }
  // this._movimientoCuenta = await movimientoCuentasModel.create(dataMovimientoCuenta);

    }     
     
    // 5- Llenar la cabecera de la entrada contable, segun los datos que ingresan
    
   let dataEntrada:IEntradaContable = {
     numero :Math.floor(Math.random() * 100),
     debito:total,
     credito:total,
     comentario,
     estado:true,
     referenciaId:id,
     createdAt:new Date(),
     updatedAt:null,
     transaccionId:this._transaccionId,
     empresaId:1,
     usuario: os.userInfo().username,
     terminal: os.hostname(),
     detalle: nuevoDetalle
   }
  // 6- Crear la entrada contable
    const entradaContable = await entradaContableModel.create(dataEntrada);
  
    return {entradaContable, movimientoCuenta :this._movimientoCuenta};
  }
}
