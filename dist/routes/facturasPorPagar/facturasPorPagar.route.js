"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FacturasPorPagar_controller_1 = require("../../Controllers/FacturasPorPagar.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
const endPointFacturacion = '/api/facturacion';
const tipoFacturasPorPagar = "tipoFacturasPorPagar";
const facturaPorPagar = "FacturaPorPagar";
//-----------TIPO FACTURA------------//
router.get(`${endPointFacturacion}/${tipoFacturasPorPagar}/:id?`, FacturasPorPagar_controller_1.getTipoFactura);
//----------- FACTURA POR PAGAR ------------//
router.post(`${endPointFacturacion}/${facturaPorPagar}`, FacturasPorPagar_controller_1.postFacturaPorPagar);
exports.default = router;
//# sourceMappingURL=facturasPorPagar.route.js.map