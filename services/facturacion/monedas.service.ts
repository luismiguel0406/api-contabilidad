import monedaModel from "../../models/moneda.model";
import { Op } from "sequelize";

export default class monedaService {
  async getMoneda(id: string) {
    const MonedaResult = await monedaModel.findAll({
      where: {
        [Op.or]: [{ id }, { id: null }],
      },
    });
    return MonedaResult;
  }
}
