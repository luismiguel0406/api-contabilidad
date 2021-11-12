import tiposContactosModel from "../../models/Contacto/tipoContactos.model";

export default class TipoContactosService {
  async getTipoContactos(id: any = null) {
    const tipoContacto =
      id === null
        ? await tiposContactosModel.findAll({ where: { estado: "1" } })
        : await tiposContactosModel.findOne({ where: { id, estado: "1" } });

    return tipoContacto;
  }

  async AddTipoContacto(body: any) {
    await tiposContactosModel.create(body);
  }

  async deleteTipoContacto(id: string) {
    await tiposContactosModel.update(
      { estado: "0" },
      {
        where: {
          id,
        },
      }
    );
  }

  async updateTipoContacto(body: any, id: string) {
    await tiposContactosModel.update(body, {
      where: {
        id,
        estado: "1",
      },
    });
  }
}