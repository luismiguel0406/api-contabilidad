"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const facturas_controller_1 = require("../../controllers/facturas.controller");
const router = (0, express_1.Router)();
const endPointFacturacion = "/api/facturacion";
const facturas = "facturas";
router.get(`${endPointFacturacion}/${facturas}/:id?`, facturas_controller_1.getFacturas);
router.post(`${endPointFacturacion}/${facturas}`, facturas_controller_1.addFactura);
router.delete(`${endPointFacturacion}/${facturas}`, facturas_controller_1.deleteFactura);
exports.default = router;
//# sourceMappingURL=factura.route.js.map