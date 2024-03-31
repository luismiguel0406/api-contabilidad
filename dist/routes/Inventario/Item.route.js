"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const item_controller_1 = require("../../controllers/item.controller");
const router = (0, express_1.Router)();
//-----------ITEM------------//
router.get(`/api/inventory/item/:id?`, item_controller_1.getItem);
router.post(`/api/inventory/item`, item_controller_1.postItem);
router.put(`/api/inventory/item/:id`, item_controller_1.updateItem);
router.delete(`/api/inventory/item/:id`, item_controller_1.deleteItem);
//------TIPO ITEM--------//
router.get(`/api/inventory/itemType/:id?`, item_controller_1.getItemType);
exports.default = router;
//# sourceMappingURL=Item.route.js.map