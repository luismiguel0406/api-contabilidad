"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const item_controller_1 = require("../../Controllers/item.controller");
const router = (0, express_1.Router)();
const endPointInventario = "/api/inventario";
const item = "item";
const tipoItem = "tipoItem";
//-----------ITEM------------//
router.get(`${endPointInventario}/${item}/:id?`, item_controller_1.getItem);
router.post(`${endPointInventario}/${item}`, item_controller_1.postItem);
router.put(`${endPointInventario}/${item}/:id`, item_controller_1.updateItem);
router.delete(`${endPointInventario}/${item}/:id`, item_controller_1.deleteItem);
//------TIPO ITEM--------//
router.get(`${endPointInventario}/${tipoItem}/:id?`, item_controller_1.getTipoItem);
router.post(`${endPointInventario}/${tipoItem}`, item_controller_1.postTipoItem);
router.put(`${endPointInventario}/${tipoItem}/:id`, item_controller_1.updateTipoItem);
router.delete(`${endPointInventario}/${tipoItem}/:id`, item_controller_1.deleteTipoItem);
exports.default = router;
//# sourceMappingURL=Item.route.js.map