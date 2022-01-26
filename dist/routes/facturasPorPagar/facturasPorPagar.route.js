"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FacturasPorPagar_controller_1 = require("Controllers/FacturasPorPagar.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
const endPointFacturacion = '/api/facturacion';
const tipoFacturasPorPagar = "tipoFacturas";
router.get(`${endPointFacturacion}/${tipoFacturasPorPagar}/:id?`, FacturasPorPagar_controller_1.getTipoFactura);
exports.default = router;
//# sourceMappingURL=facturasPorPagar.route.js.map