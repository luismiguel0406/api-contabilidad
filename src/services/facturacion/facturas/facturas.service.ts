import { IFactura } from "../../../interfaces/factura.interface";
import detallesFactura from "../../../models/Facturacion/facturas/detalleFactura";
import facturas from "../../../models/Facturacion/facturas/factura.model";

export default class FacturasService {
  async addFactura(body: IFactura) {
    try {
      const factura: any = await facturas.create(body);
      const { id } = factura.dataValues;

      for await (let detalle of body.detalleFactura) {
        detalle.facturaId = id;
      }
      const detalleFactura = await detallesFactura.bulkCreate(
        body.detalleFactura
      );

      return { factura, detalleFactura };
    } catch (error) {
      return error;
    }
  }

  async getFacturas(id: any = null, empresaId: string) {
    const facturasResult =
      id === null
        ? await facturas.findAll({
            include: [
              {
                model: detallesFactura,
                required: true,
              },
            ],
          })
        : await facturas.findOne({
            include: [
              {
                model: detallesFactura,
                required: true,
              },
            ],
            where: { id, empresaId, estado: "1" },
          });

    return facturasResult;
  }

  async deleteFactura(id: string, empresaId: string) {
    await facturas.update({ estado: "0" }, { where: { id, empresaId } });
  }

  async updateFactura() {
    return "Las facturas no se actualizan";
  }
}
