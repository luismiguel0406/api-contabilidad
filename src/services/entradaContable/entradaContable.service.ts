import entradaContableModel from "../../models/EntradaContable/entradaContable.model";
import accionEntradaContableModel from "../../models/AccionEntradaContable/accionEntradaContable.model";
import movimientoCuentasModel from '../../models/Cuentas Contables/movimientoCuentas.model';
import TransaccionService from "../transaccion/transaccion.service";
import determinarEntradaContable from "../../helpers";
import { TMovimientoCuentas, 
         TDataEntradaContable, 
         TEntradaContable, 
         TEntradaContableDetalle } from "types";
export default class EntradaContableService {

  private _transaccionId: number = 0;
  private _movimientoCuenta!:unknown;
  private _detalleEntrada!:TEntradaContableDetalle[];
  private _dataMovimientoCuenta!:TMovimientoCuentas[];
  private _dataEntrada!:TEntradaContable;
  private _accionContable:any[]=[]

    // 1- Obtengo id de la transaccion en curso

  async createEntradaContable(data:TDataEntradaContable) {

      const { payload, id, total, comentario, detalle } = data;

      const transaccion_service = new TransaccionService(); 
      const transaccion :any = await transaccion_service.getTransaccion(payload);
      this._transaccionId = transaccion?.id
  
    // 2- Busco las acciones que se haran relativa a esta transaccion

    this._accionContable = <Array<any>> await accionEntradaContableModel.findAll({
      attributes:["tipoCuentaId", "tipoEfectoId", "tipoRegistroId"],
      where:{ transaccionId: this._transaccionId, estado:"1"}
    })

    // 3- Identificar los tipos de registro segun accion contable
    this._detalleEntrada  = [];    
    this._dataMovimientoCuenta = [];
    for await(let details of detalle){
      let detalleSalida = this._accionContable.filter(item=>(item.tipoCuentaId === details.tipoCuentaId))
      const { tipoCuentaId, tipoEfectoId, tipoRegistroId } = detalleSalida[0];
      
      let { monto, cuentaId, numeroCuenta, descripcion } = details;
 
      const determinacion = determinarEntradaContable(tipoCuentaId, tipoEfectoId, monto);

      this._detalleEntrada.push({
        cuentaId,
        numeroCuenta,
        descripcion,
        ...determinacion
      })

  // 4- Registrar movimiento de cuenta

  this._dataMovimientoCuenta.push({
    createdAt:new Date(),
    cuentaId,
    tipoRegistroId,
    tipoEfectoId,
    monto,
    descripcion,
    referenciaId: id,
    transaccionId:this._transaccionId,
    saldo:Math.floor(Math.random() * 10000),
    estado:true,
    usuario: 'SA',
    terminal: 'SA',
  })
}     

this._movimientoCuenta = await movimientoCuentasModel.bulkCreate(this._dataMovimientoCuenta);

    // 5- Llenar la cabecera de la entrada contable, segun los datos que ingresan
    
   this._dataEntrada = {
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
    const entradaContable = await entradaContableModel.create(this._dataEntrada);
  
    return {entradaContable, movimientoCuenta :this._movimientoCuenta};
  }
}
