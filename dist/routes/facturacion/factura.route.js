"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const facturas_controller_1 = require("../../Controllers/facturas.controller");
const router = (0, express_1.Router)();
const endPointFacturacion = '/api/facturacion';
const facturas = "facturas";
router.get(`${endPointFacturacion}/${facturas}/:id?`, facturas_controller_1.getFacturas);
router.post(`${endPointFacturacion}/${facturas}`, facturas_controller_1.addFactura);
exports.default = router;
//# sourceMappingURL=factura.route.js.map