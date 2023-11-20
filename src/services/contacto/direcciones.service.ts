import { TDireccion } from "types";
import direccionesModel from "../../models/Contacto/Direcciones.model";

export default class DireccionService {
  async getDireccion(id: number) {
    const direccionResult = await direccionesModel.findByPk(id);

    return direccionResult;
  }

  async addDireccion(body: TDireccion) {
    await direccionesModel.create(body);
  }

  async updateDireccion(body: TDireccion, id: number) {
    await direccionesModel.update(body, {
      where: { id, estado: true },
    });
  }
}
