import { IItem, ITipoItem } from "../../interfaces/Item.interface";
import item from "../../models/Inventario/Item.model";
import tiposItem from "../../models/Inventario/tipoItem.model";

export default class ItemService {
  //---------- ITEM SERVICE -----------//

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

  //------------- ITEM --------------//

  async getItem(id: any = null) {
    const itemResult =
      id === null
        ? await item.findAll({ where: { estado: "1" } })
        : await item.findOne({ where: { id, estado: "1" } });
    return itemResult;
  }

  async updateItem(body: IItem, id: string) {
    await item.update(body, {
      where: {
        id,
        estado: "1",
      },
    });
  }

  async deleteItem(id: string) {
    await item.update({ estado: "0" }, { where: { id } });
  }

  async addItem(body: IItem) {
    await item.create(body);
  }
}
