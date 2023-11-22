import { TDireccion } from "types";
import { Transaction } from "sequelize";
import direccionesModel from "../../models/Contacto/direcciones.model";

export default class DireccionService {
  async getDireccion(id: number) {
    const direccionResult = await direccionesModel.findByPk(id);

    return direccionResult;
  }

  async addDireccion(body: TDireccion, transaction: Transaction) {
    await direccionesModel.create(body, { transaction });
  }

  async updateDireccion(body: TDireccion, id: number) {
    await direccionesModel.update(body, {
      where: { id, estado: true },
    });
  }

  async deleteDireccion(id: number) {
    await direccionesModel.update({ estado: false }, { where: { id } });
  }
}
