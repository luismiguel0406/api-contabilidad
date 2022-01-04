import { IDetalleFactura } from "../../../interfaces/factura.interface";
import detallesFactura from "../../../models/Facturacion/facturas/detalleFactura";

export default class DetalleFacturaService {
  async addDetalleFactura(body: IDetalleFactura,facturaId:unknown) {
    try {
      const detalleFactura = await detallesFactura.create({body,facturaId});
      return detalleFactura;
    } catch (error) {
      return error;
    }
  }
}
