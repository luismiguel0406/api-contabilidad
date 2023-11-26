import { TAddress } from "types";
import { Transaction } from "sequelize";
import addressModel from "../../models/Contacto/address.model";

export default class DireccionService {
  async getAdress(id: number) {
    const result = await addressModel.findByPk(id);

    return result;
  }

  async addAddress(body: TAddress, transaction: Transaction) {
    await addressModel.create(body, { transaction });
  }

  async updateAddress(body: TAddress, id: number) {
    await addressModel.update(body, {
      where: { id, state: true },
    });
  }

  async deleteAddress(id: number) {
    await addressModel.update({ state: false }, { where: { id } });
  }
}
