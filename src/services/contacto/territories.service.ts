import { TProvince } from "types";
import provincesModel from "../../models/Contacto/provinces.model";

export default class TerritoriesService {
  async getProvinces() {
    const result = await provincesModel.findAll({ where: { state: true } });
    return result;
  }

  async postProvince(body: TProvince[]) {
    await provincesModel.bulkCreate(body);
  }
}
