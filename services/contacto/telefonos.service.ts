import telefonosModel from "../../models/Contacto/telefono.model";

export default class TelefonoService {
  async getTelefonos(id: any = null) {
    const telefono =
      id === null
        ? await telefonosModel.findAll({ where: { estado: "1" } })
        : await telefonosModel.findOne({ where: { id, estado: "1" } });

    return telefono;
  }

  async AddTelefono(body: any) {
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

  async updateTelefono(body: any, id: string) {
    await telefonosModel.update(body, {
      where: {
        id,
        estado: "1",
      },
    });
  }
}
