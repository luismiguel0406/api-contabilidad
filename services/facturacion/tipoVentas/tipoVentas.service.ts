import { ITipoVentas } from "../../../interfaces/tipoVentas.interface";
import tipoVentasModel from "../../../models/Facturacion/ventas/tipoVentas.model";

export class TipoVentasService {
  async getTipoventas(id: any = null) {
    const tipoVentasResult =
      id === null
        ? await tipoVentasModel.findAll({ where: { estado: "1" } })
        : await tipoVentasModel.findOne({ where: { id, estado: "1" } });
    return tipoVentasResult;
  }

  async updateTipoVentas(body: ITipoVentas, id: string) {
    await tipoVentasModel.update(body, {
      where: {
        id,
        estado: "1",
      },
    });
  }

  async deleteTipoVentas(id: string) {
    await tipoVentasModel.update({ estado: "0" }, { where: { id } });
  }

  async addTipoVentas(body: ITipoVentas) {
    await tipoVentasModel.create(body);
  }
}
