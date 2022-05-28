import entradasContables from "../../models/EntradaContable/entradaContable.model";
import AccionesEntradaContableService from "../AccioneseEntradaContable/AccionesEntradaContable.service";
import { v4 as uuidv4 } from "uuid";
import {
  IEntradaContable
} from "../../interfaces/entradaContable.interface";
import TransaccionesComercialesService from "../transaccionesComerciales/transaccionesComerciales.service";


export default class EntradaContableService {
  private _transaccionId:any;
  private _payload;

  constructor(payload: string) {
    this._payload = payload
    
  }

  async getTransacionInit() {
    const transaccionComercial_service = new TransaccionesComercialesService();
    const transaccionId:any = await transaccionComercial_service.getTransaccionesComerciales(
      this._payload
    );
    this._transaccionId = transaccionId.id
    return
  }

  async facturaPorPagar(data: any) {
    const {
      total,
      comentario,
      empresaId,
      createdAt,
      usuario,
      terminal,
      id,
      detalleFacturaPorPagar,
    } = data;

    let entradaContableHeader: IEntradaContable = {
      noEntrada: 123456,
      totalDebito: total,
      totalCredito: total,
      comentario,
      estado: true,
      createdAt,
      updatedAt: null,
      usuario,
      terminal,
      empresaId,
      transaccionComercialId: this._transaccionId, // Transaccion comercial  ejemplo: factura, pago , etc
      transaccionId: id, // Id de la accion realzada // ver aqui arreglar nombres y demas
      detalle: detalleFacturaPorPagar,
    };

    return entradaContableHeader;
  }

  async generarDetalle(detalle: any) {
    const accionEntrada_service = new AccionesEntradaContableService();
    await this.getTransacionInit();
    const accionesContables = <Array<any>>(
      await accionEntrada_service.getAccionEntrada(this._transaccionId)
    );

    let entradaContableDetalle: any = [];
    for await (let d of detalle) {
      let accionContableFiltered = accionesContables.filter(
        (a: any) => a.tipoCuentaId == d.tipoCuentaId
      );
      switch (accionContableFiltered[0]?.accion) {
        case "CREDITO":
          entradaContableDetalle.push({
            credito: d.valor,
            debito: 0,
            descripcionCuenta: d.descripcionCuenta,
            cuenta: d.cuenta,
            detalleImpuesto:d.detalleImpuestos
          });

          break;
        case "DEBITO":
          entradaContableDetalle.push({
            credito: 0,
            debito: d.valor,
            descripcionCuenta: d.descripcionCuenta,
            cuenta: d.cuenta,
            detalleImpuesto:d.detalleImpuestos
          });

          break;
        default:
          break;
      }     
    }
    return entradaContableDetalle;
  }
  
  async addEntradaContable( entrada:IEntradaContable ){   
   return await entradasContables.create(entrada)    
  }

}
