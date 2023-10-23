import entradaContableModel from "../../models/EntradaContable/entradaContable.model";
import TransaccionService from "../transaccion/transaccion.service";
import accionEntradaContableModel from "../../models/AccionEntradaContable/accionEntradaContable.model";
import os from 'os'
import determinarEntradaContable from "../../helpers";
export default class EntradaContableService {

  private _transaccionId: number = 0;

    // 1- Otengo id de la transaccion en curso

  async createEntradaContable(payload: string, data:any) {
      const transaccion_service = new TransaccionService(); 
      const transaccion :any = await transaccion_service.getTransaccion(payload);
      this._transaccionId = transaccion.id
  
    // 2- Busco las acciones que se haran relativa a esta transaccion

    const accionContable =<Array<any>> await accionEntradaContableModel.findAll({
      attributes:["transaccionId", "tipoCuentaId", "tipoEfectoId", "tipoRegistroId"],
      where:{ transaccionId: this._transaccionId, estado:"1"}
    })

    // 3- Identificar los tipos de registro segun accion contable

    const { detalle } = data;
    let nuevoDetalle:Object[] = [];

    for await(let details of detalle){
      let detalleSalida = accionContable.filter(item=>(item.tipoCuentaId === details.tipoCuentaId))
      const { tipoCuentaId, tipoEfectoId, tipoRegistroId, transaccionId } = detalleSalida[0];
      
      let { valor } = details;
      const determinacion:Object = determinarEntradaContable(tipoCuentaId, tipoEfectoId, valor );

      nuevoDetalle.push({
        cuenta: details.cuenta,
        descripcion: details.descripcionCuenta,
        ...determinacion
      })
    }     
     
    // 4- Llenar la cabecera de la entrada contable, segun los datos que ingresan
    
   const dataEntrada = {
     numero :100,
     debito:data.total,
     credito:data.total,
     comentario:'',
     estado:true,
     createdAt: new Date(),
     transaccionId: this._transaccionId,
     documentoId: data.id,
     empresaId:1,
     usuario: os.userInfo().username,
     terminal: os.hostname(),
     detalle: nuevoDetalle
   }

    const entradaContable = await entradaContableModel.create(dataEntrada);
    
    return entradaContable;
  }
}
