import { ITipoItem } from "../../interfaces/tipoItem.interface";
import tiposItem from "../../models/Inventario/tipoItem.model";

export default class ItemService {
  async getTipoItem(id: any = null) {
    const tipoItemResult =
      id === null
        ? await tiposItem.findAll({ where: { estado: "1" } })
        : await tiposItem.findOne({ where: { id, estado: "1" } });
    return tipoItemResult;
  }

  async updateTipoItem(body: ITipoItem, id: string) {
    await tiposItem.update(body, {
      where: {
        id,
        estado: "1",
      },
    });
  }

  async deleteTipoItem(id: string) {
    await tiposItem.update({ estado: "0" }, { where: { id } });
  }

  async addTipoItem(body: ITipoItem) {
    await tiposItem.create(body);
  }
}
