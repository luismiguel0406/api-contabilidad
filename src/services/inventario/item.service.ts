import { IItem, ITipoItem } from "../../interfaces/Item.interface";
import itemModel from "../../models/Inventario/Item.model";
import tiposItemModel from "../../models/Inventario/tipoItem.model";

export default class ItemService {
  //---------- TIPO ITEM -----------//

  async getTipoItem(id: any = null) {
    const tipoItemResult =
      id === null
        ? await tiposItemModel.findAll({ where: { estado: "1" } })
        : await tiposItemModel.findOne({ where: { id, estado: "1" } });
    return tipoItemResult;
  }

  async updateTipoItem(body: ITipoItem, id: string) {
    await tiposItemModel.update(body, {
      where: {
        id,
        estado: "1",
      },
    });
  }

  async deleteTipoItem(id: string) {
    await tiposItemModel.update({ estado: "0" }, { where: { id } });
  }

  async addTipoItem(body: ITipoItem) {
    await tiposItemModel.create(body);
  }

  //------------- ITEM --------------//

  async getItem(id: any = null) {
    const itemResult =
      id === null
        ? await itemModel.findAll({ where: { estado: "1" } })
        : await itemModel.findOne({ where: { id, estado: "1" } });
    return itemResult;
  }

  async updateItem(body: IItem, id: string) {
    await itemModel.update(body, {
      where: {
        id,
        estado: "1",
      },
    });
  }

  async deleteItem(id: string) {
    await itemModel.update({ estado: "0" }, { where: { id } });
  }

  async addItem(body: IItem) {
    await itemModel.create(body);
  }
}
