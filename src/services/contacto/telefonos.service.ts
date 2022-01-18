import { ITelefono } from "../../interfaces/contactos.interface";
import telefonosModel from "../../models/Contacto/telefono.model";

export default class TelefonoService {
  async getTelefonos(id: any = null) {
    const telefonoResult =
      id === null
        ? await telefonosModel.findAll({ where: { estado: "1" } })
        : await telefonosModel.findOne({ where: { id, estado: "1" } });

    return telefonoResult;
  }

  async AddTelefono(body: ITelefono) {
    await telefonosModel.create(body);
  }

  async deleteTelefono(id: string) {
    await telefonosModel.update(
      { estado: "0" },
      {
        where: {
          id,
        },
      }
    );
  }

  async updateTelefono(body: ITelefono, id: string) {
    await telefonosModel.update(body, {
      where: {
        id,
        estado: "1",
      },
    });
  }
}
