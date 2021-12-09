"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const moneda_controller_1 = require("../../Controllers/moneda.controller");
const router = (0, express_1.Router)();
const endPointFacturacion = '/api/facturacion';
const Moneda = 'moneda';
router.get(`${endPointFacturacion}/${Moneda}/:id?`, moneda_controller_1.getMoneda);
router.post(`${endPointFacturacion}/${Moneda}`, moneda_controller_1.postMoneda);
router.put(`${endPointFacturacion}/${Moneda}/:id`, moneda_controller_1.updateMoneda);
router.delete(`${endPointFacturacion}/${Moneda}/:id`, moneda_controller_1.deleteMoneda);
exports.default = router; //ve a arreglar empresa
//# sourceMappingURL=moneda.route.js.map