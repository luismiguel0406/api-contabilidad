import { IDetalleFactura } from "../../../interfaces/factura.interface";
import detallesFactura from "../../../models/Facturacion/facturas/detalleFactura";

export default class DetalleFacturaService {
  async addDetalleFactura(body: Array<IDetalleFactura>, facturaId: number) {
    try {
      for (let detalle of body) {
        detalle.facturaId = facturaId;
      }
      const detalleFactura = await detallesFactura.bulkCreate(body);
      return detalleFactura;
    } catch (error) {
      return error;
    }
  }
}
