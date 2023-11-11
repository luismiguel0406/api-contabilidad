"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FacturasPorPagar_controller_1 = require("../../controllers/FacturasPorPagar.controller");
const express_1 = require("express");
const jsonWebToken_1 = require("../../lib/Token/jsonWebToken");
const router = (0, express_1.Router)();
const endPointFacturacion = "/api/facturacion";
const tipoFacturasPorPagar = "tipoFacturasPorPagar";
const facturaPorPagar = "FacturaPorPagar";
//-----------TIPO FACTURA------------//
router.get(`${endPointFacturacion}/${tipoFacturasPorPagar}/:id?`, FacturasPorPagar_controller_1.getTipoFactura);
//----------- FACTURA POR PAGAR ------------//
router.use(`${endPointFacturacion}/${facturaPorPagar}`, jsonWebToken_1.ValidarToken);
router.post(`${endPointFacturacion}/${facturaPorPagar}`, FacturasPorPagar_controller_1.postFacturaPorPagar);
router.get(`${endPointFacturacion}/${facturaPorPagar}/:id?`, FacturasPorPagar_controller_1.getFacturasPorPagar);
exports.default = router;
//# sourceMappingURL=facturasPorPagar.route.js.map