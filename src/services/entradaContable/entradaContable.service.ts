import entradasContables from "../../models/EntradaContable/entradaContable.model";
import AccionesEntradaContableService from "../AccioneseEntradaContable/AccionesEntradaContable.service";
import { v4 as uuidv4 } from "uuid";
import { IEntradaContable } from "../../interfaces/entradaContable.interface";
import TransaccionesComercialesService from "../transaccionesComerciales/transaccionesComerciales.service";

export default class EntradaContableService {
  private _transComercialId: any;

  async getTransacionInit(payload: string) {
    const transaccionComercial_service = new TransaccionesComercialesService();

    //Busco tipo de transaccion segun payload declarado en el controlador
    const transaccionComercial: any =
      await transaccionComercial_service.getTransaccionesComerciales(payload);
    return transaccionComercial.id;
  }

  async facturaPorPagar(data: any, payload: string) {
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
    const transComercialId: number = await this.getTransacionInit(payload);
    this._transComercialId = transComercialId;

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
      transaccionComercialId: transComercialId, // Transaccion comercial  ejemplo: factura, pago , etc
      transaccionId: id, // Id de la accion realzada // ver aqui arreglar nombres y demas
      detalle: detalleFacturaPorPagar,
    };

    return entradaContableHeader;
  }

  async generarDetalle(detalle: any) {
    const accionEntrada_service = new AccionesEntradaContableService();
    const accionesContables = <Array<any>>(
      await accionEntrada_service.getAccionEntrada(this._transComercialId)
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
          });

          break;
        case "DEBITO":
          entradaContableDetalle.push({
            credito: 0,
            debito: d.valor,
            descripcionCuenta: d.descripcionCuenta,
            cuenta: d.cuenta,
          });

          break;
        default:
          break;
      }
    }
    return entradaContableDetalle;
  }

  async addEntradaContable(entrada: IEntradaContable) {
    return await entradasContables.create(entrada);
  }
}
