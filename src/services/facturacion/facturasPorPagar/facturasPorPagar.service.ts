import { Transaction } from "sequelize";
import facturasPorPagar from "../../../models/Facturacion/Facturas por pagar/facturasPorPagar.model";
import tipoFacturasPorPagar from "../../../models/Facturacion/Facturas por pagar/tiposFacturasPorPagar/tiposFacturasPorPagar.model";
import { TFacturasPorPagar, TTypeGeneric } from "types";

export default class FacturasPorPagarService {
  //---------- FACTURAS POR PAGAR -------------//

  async getFacturasPorPagar(id: any = null, empresaId: string) {
    const FacturasPorPagar =
      id === null
        ? await facturasPorPagar.findAll({
            where: { empresaId, estado: true },
          })
        : await facturasPorPagar.findOne({
            where: { id, empresaId, estado: true },
          });

    return FacturasPorPagar;
  }

  async addFacturasPorPagar(body: TFacturasPorPagar, transaction: Transaction) {
    try {
      return await facturasPorPagar.create(body, { transaction });
    } catch (error) {
      return error;
    }
  }

  async deleteFacturasPorPagar(id: string, empresaId: string) {
    await facturasPorPagar.update(
      { estado: false },
      { where: { id, empresaId } }
    );
  }

  //------------TIPO FACTURAS POR PAGAR ----------//

  async getTiposFactura(id: any = null) {
    const Tipofactura =
      id === null
        ? await tipoFacturasPorPagar.findAll({ where: { estado: true } })
        : await tipoFacturasPorPagar.findOne({ where: { id, estado: true } });

    return Tipofactura;
  }

  async addTipoFactura(body: TTypeGeneric) {
    await tipoFacturasPorPagar.create(body);
  }

  async updateTipoFacturas(body: TTypeGeneric, id: string) {
    await tipoFacturasPorPagar.update(body, {
      where: {
        id,
        estado: true,
      },
    });
  }

  async deleteTipoFacturas(id: string) {
    await tipoFacturasPorPagar.update({ estado: false }, { where: { id } });
  }
}
