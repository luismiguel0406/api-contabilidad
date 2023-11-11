"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const medioDePago_controller_1 = require("../../controllers/medioDePago.controller");
const router = (0, express_1.Router)();
const endPointFacturacion = "/api/facturacion";
const medioDePago = "medioDePago";
router.get(`${endPointFacturacion}/${medioDePago}/:id?`, medioDePago_controller_1.getMedioDePago);
router.post(`${endPointFacturacion}/${medioDePago}`, medioDePago_controller_1.postMedioDePago);
router.put(`${endPointFacturacion}/${medioDePago}/:id`, medioDePago_controller_1.updateMedioDePago);
router.delete(`${endPointFacturacion}/${medioDePago}/:id`, medioDePago_controller_1.deleteMedioDePago);
exports.default = router;
//# sourceMappingURL=medioDePagp.route.js.map