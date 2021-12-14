import { ITipoVentas } from "../../../interfaces/tipoVentas.interface";
import tipoVentas from "../../../models/Facturacion/ventas/tipoVentas.model";

export class TipoVentasService {
  async getTipoventas(id: any = null) {
    const tipoVentasResult =
      id === null
        ? await tipoVentas.findAll({ where: { estado: "1" } })
        : await tipoVentas.findOne({ where: { id, estado: "1" } });
    return tipoVentasResult;
  }

  async updateTipoVentas(body: ITipoVentas, id: string) {
    await tipoVentas.update(body, {
      where: {
        id,
        estado: "1",
      },
    });
  }

  async deleteTipoVentas(id: string) {
    await tipoVentas.update({ estado: "0" }, { where: { id } });
  }

  async addTipoVentas(body: ITipoVentas) {
    await tipoVentas.create(body);
  }
}
