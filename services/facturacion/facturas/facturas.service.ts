import { IFactura } from "../../../interfaces/factura.interface";
import detallesFactura from "../../../models/Facturacion/facturas/detalleFactura";
import facturas from "../../../models/Facturacion/facturas/factura.model";
import detallesImpuesto from "../../../models/Facturacion/impuestos/detalleImpuestos";

export default class FacturasService {
  async addFactura(body: IFactura) {
    try {
      const factura = await facturas.create(body);
      return factura;
    } catch (error) {
      return error;
    }
  }
  
  async getFacturas(id: any = null) {
    const facturasResult =
      id === null
        ? await facturas.findAll({
            include: [
              {
                model: detallesFactura,
                required: true,
                include: [{ model: detallesImpuesto }],
              },
            ],
          })
        : await facturas.findAll({
            include: [
              {
                model: detallesFactura,
                required: true,
                include: [{ model: detallesImpuesto }],
              },
            ],
            where: { id, estado: "1" },
          });

    return facturasResult;
  }

  async deleteFactura(id: string) {
    await facturas.update({ estado: "0" }, { where: { id } });
  }

  async updateFactura() {
    return "Las facturas no se actualizan";
  }
}
