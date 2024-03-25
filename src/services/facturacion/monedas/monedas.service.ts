import monedaModel from "../../../models/Facturacion/currency/currency.model";
import { IMoneda } from "../../../interfaces/moneda.interface";

export default class MonedaService {
  async getMoneda(id: any = null) {
    const MonedaResult =
      id === null
        ? await monedaModel.findAll({ where: { estado: "1" } })
        : await monedaModel.findOne({ where: { id, estado: "1" } });

    return MonedaResult;
  }

  async updateMoneda(id: string, body: IMoneda) {
    await monedaModel.update(body, {
      where: {
        id,
        estado: "1",
      },
    });
  }

  async deleteMoneda(id: string) {
    await monedaModel.update(
      { estado: "0" },
      {
        where: { id },
      }
    );
  }

  async addMoneda(body: IMoneda) {
    await monedaModel.create(body);
  }
}
