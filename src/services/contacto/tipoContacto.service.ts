import { ItipoContacto } from "../../interfaces/contactos.interface";
import tiposContactosModel from "../../models/Contacto/tipoContactos.model";

export default class TipoContactosService {
  async getTipoContactos(id: any = null) {
    const tipoContacto =
      id === null
        ? await tiposContactosModel.findAll({ where: { estado: "1" } })
        : await tiposContactosModel.findOne({ where: { id, estado: "1" } });

    return tipoContacto;
  }

  async AddTipoContacto(body: ItipoContacto) {
    await tiposContactosModel.create(body);
  }

  async deleteTipoContacto(id: string) {
    await tiposContactosModel.update(
      { estado: false},
      {
        where: {
          id,
        },
      }
    );
  }

  async updateTipoContacto(body: ItipoContacto, id: string) {
    await tiposContactosModel.update(body, {
      where: {
        id,
        estado: "1",
      },
    });
  }
}