"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_model_1 = __importDefault(require("../../models/Inventario/Item.model"));
const itemType_model_1 = __importDefault(require("../../models/Inventario/itemType.model"));
class ItemService {
    //---------- TIPO ITEM -----------//
    getItemType(id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = id === null
                ? yield itemType_model_1.default.findAll({
                    attributes: ["id", "description"],
                    where: { state: true },
                })
                : yield itemType_model_1.default.findOne({
                    attributes: ["id", "description"],
                    where: { id, state: true },
                });
            return result;
        });
    }
    //------------- ITEM --------------//
    getItem(id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const itemResult = id === null
                ? yield Item_model_1.default.findAll({ where: { state: true } })
                : yield Item_model_1.default.findOne({ where: { id, state: true } });
            return itemResult;
        });
    }
    updateItem(body, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Item_model_1.default.update(body, {
                where: {
                    id,
                    state: true,
                },
            });
        });
    }
    deleteItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Item_model_1.default.update({ state: false }, { where: { id } });
        });
    }
    addItem(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Item_model_1.default.create(body);
        });
    }
}
exports.default = ItemService;
//# sourceMappingURL=item.service.js.map