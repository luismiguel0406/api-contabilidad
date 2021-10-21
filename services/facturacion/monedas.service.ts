import monedaModel from "../../models/moneda.model";
import { Op } from "sequelize";
import { Moneda } from "../../interfaces/moneda.interface";

export default class monedaService {
  async getMoneda(id: any) {
    const MonedaResult = await monedaModel.findAll({
      where: {
        id: {
          [Op.or]: {
            [Op.eq]: id,
            [Op.not]: null,
          },
        },
      },
    });
    return MonedaResult;
  }

  async updateMoneda(id: string, body: Moneda) {
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

  async addMoneda(body: Moneda) {
    await monedaModel.create(body);
  }
}
