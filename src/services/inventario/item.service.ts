import { TItem, TTypeGeneric } from "types";
import itemModel from "../../models/Inventario/Item.model";
import itemTypeModel from "../../models/Inventario/itemType.model";

export default class ItemService {
  //---------- TIPO ITEM -----------//

  async getItemType(id: any = null) {
    const result =
      id === null
        ? await itemTypeModel.findAll({
            attributes: ["id", "description"],
            where: { state: true },
          })
        : await itemTypeModel.findOne({
            attributes: ["id", "description"],
            where: { id, state: true },
          });
    return result;
  }

  //------------- ITEM --------------//

  async getItem(id: any = null) {
    const itemResult =
      id === null
        ? await itemModel.findAll({
            include: [
              {
                model: itemTypeModel,
                attributes: ["description", "id"],
                required: true,
              },
            ],
            where: { state: true },
          })
        : await itemModel.findOne({
            include: [
              {
                model: itemTypeModel,
                attributes: ["description", "id"],
                required: true,
              },
            ],
            where: { id, state: true },
          });
    return itemResult;
  }

  async updateItem(body: TItem, id: string) {
    await itemModel.update(body, {
      where: {
        id,
        state: true,
      },
    });
  }

  async deleteItem(id: string) {
    await itemModel.update({ state: false }, { where: { id } });
  }

  async addItem(body: TItem) {
    await itemModel.create(body);
  }
}
