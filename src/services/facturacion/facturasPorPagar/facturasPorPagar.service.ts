import {
  IFacturasPorPagar,
  ITipoFacturasPorPagar,
} from "interfaces/facturasPorPagar.interface";
import detalleFacturasPorPagar from "../../../models//Facturacion/Facturas por pagar/detalleFacturasPorPagar.model"
import facturasPorPagar from "../../../models/Facturacion/Facturas por pagar/facturasPorPagar.model";
import tipoFacturasPorPagar from "../../../models/Facturacion/Facturas por pagar/tiposFacturasPorPagar/tiposFacturasPorPagar.model";

export default class FacturasPorPagarService {
  //---------- FACTURAS POR PAGAR -------------//

  async getFacturasPorPagar(id: any = null, empresaId: string) {
    const FacturasPorPagar =
      id === null
        ? await facturasPorPagar.findAll({ where: { empresaId, estado: "1" } })
        : await facturasPorPagar.findOne({
            where: { id, empresaId, estado: "1" },
          });

    return FacturasPorPagar;
  }

  async addFacturasPorPagar(body: IFacturasPorPagar) {
    try {
      const facturaPorPagarResult: any = await facturasPorPagar.create(body);
      const { id } = facturaPorPagarResult.dataValues;
      
      for await (let detalle of body.detalleFacturaPorPagar) {
        detalle.facturaPorPagarId = id;
      }
      const detalleFacturaResult = await detalleFacturasPorPagar.bulkCreate(
        body.detalleFacturaPorPagar
      );
      return {
        facturaPorPagar: facturaPorPagarResult,
        detalleFacturaPorPagar: detalleFacturaResult,
      };
    } catch (error) {
      return error;
    }
  }

  async deleteFacturasPorPagar(id: string, empresaId: string) {
    await facturasPorPagar.update(
      { estado: "0" },
      { where: { id, empresaId } }
    );
  }

  async updateFacturasPorPagar() {
    return "Las Facturas no se actualizan";
  }

  //------------TIPO FACTURAS POR PAGAR ----------//

  async getTiposFactura(id: any = null) {
    const Tipofactura =
      id === null
        ? await tipoFacturasPorPagar.findAll({ where: { estado: "1" } })
        : await tipoFacturasPorPagar.findOne({ where: { id, estado: "1" } });

    return Tipofactura;
  }

  async addTipoFactura(body: ITipoFacturasPorPagar) {
    await tipoFacturasPorPagar.create(body);
  }

  async updateTipoFacturas(body: ITipoFacturasPorPagar, id: string) {
    await tipoFacturasPorPagar.update(body, {
      where: {
        id,
        estado: "1",
      },
    });
  }

  async deleteTipoFacturas(id: string) {
    await tipoFacturasPorPagar.update({ estado: "0" }, { where: { id } });
  }
}
