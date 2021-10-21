"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const moneda_controller_1 = require("../../Controllers/moneda.controller");
const router = (0, express_1.Router)();
const endPoint = '/api/facturacion';
router.get(`${endPoint}/monedas/:id?`, moneda_controller_1.getMoneda);
router.post(`${endPoint}/addMoneda`, moneda_controller_1.postMoneda);
router.put(`${endPoint}/updateMoneda/:id`, moneda_controller_1.updateMoneda);
router.put(`${endPoint}/deleteMoneda/:id`, moneda_controller_1.deleteMoneda);
exports.default = router;
//# sourceMappingURL=moneda.route.js.map