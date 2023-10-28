import entradaContableModel from "../../models/EntradaContable/entradaContable.model";
import accionEntradaContableModel from "../../models/AccionEntradaContable/accionEntradaContable.model";
import movimientoCuentasModel from '../../models/Cuentas Contables/movimientoCuentas.model';
import TransaccionService from "../transaccion/transaccion.service";
import determinarEntradaContable from "../../helpers";
import { IDataEntradaContable, IDeterminacion, IEntradaContable, IEntradaContableDetalle } from "interfaces/entradaContable.interface";
import { IMovimientoCuentas } from 'interfaces/cuentaContable.interface';
export default class EntradaContableService {

  private _transaccionId: number = 0;
  private _movimientoCuenta!:any;
  private _detalleEntrada!:IEntradaContableDetalle[];

    // 1- Obtengo id de la transaccion en curso

  async createEntradaContable(data:IDataEntradaContable) {

      const { payload, id, total, comentario, detalle } = data;

      const transaccion_service = new TransaccionService(); 
      const transaccion :any = await transaccion_service.getTransaccion(payload);
      this._transaccionId = transaccion?.id
  
    // 2- Busco las acciones que se haran relativa a esta transaccion

    const accionContable =<Array<any>> await accionEntradaContableModel.findAll({
      attributes:["tipoCuentaId", "tipoEfectoId", "tipoRegistroId"],
      where:{ transaccionId: this._transaccionId, estado:"1"}
    })

    // 3- Identificar los tipos de registro segun accion contable
    let detalleEntrada = []
    for await(let details of detalle){
      let detalleSalida = accionContable.filter(item=>(item.tipoCuentaId === details.tipoCuentaId))
      const { tipoCuentaId, tipoEfectoId, tipoRegistroId } = detalleSalida[0];
      
      let { monto, cuentaId, numeroCuenta, descripcion } = details;
 
      const determinacion:IDeterminacion = determinarEntradaContable(tipoCuentaId, tipoEfectoId, monto);

      detalleEntrada.push({
        cuentaId,
        numeroCuenta,
        descripcion,
        ...determinacion
      })

  // 4- Registrar movimiento de cuenta
  let dataMovimientoCuenta:IMovimientoCuentas = {
    createdAt:new Date(),
    cuentaContableId:cuentaId,
    tipoRegistroId,
    tipoEfectoId,
    monto,
    descripcion,
    referenciaId: id,
    transaccionId:this._transaccionId,
    saldo:Math.floor(Math.random() * 10000),
    usuario: 'SA',
    terminal: 'SA',
  }
  this._movimientoCuenta = await movimientoCuentasModel.create(dataMovimientoCuenta);

    }     
    // 5- Llenar la cabecera de la entrada contable, segun los datos que ingresan
    this._detalleEntrada = detalleEntrada;
    
   let dataEntrada:IEntradaContable = {
     numero :Math.floor(Math.random() * 1000),
     debito:total,
     credito:total,
     comentario,
     estado:true,
     referenciaId:id,
     createdAt:new Date(),
     updatedAt:null,
     transaccionId:this._transaccionId,
     empresaId:1,
     usuario: 'SA',
     terminal:'SA',
     detalle: this._detalleEntrada
   }

  // 6- Crear la entrada contable
    const entradaContable = await entradaContableModel.create(dataEntrada);
  
    return {entradaContable, movimientoCuenta :this._movimientoCuenta};
  }
}
