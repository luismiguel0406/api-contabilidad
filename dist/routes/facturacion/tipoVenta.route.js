"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoVentas_controller_1 = require("../../controllers/tipoVentas.controller");
const router = (0, express_1.Router)();
const endPointFacturacion = "/api/facturacion";
const tipoVenta = "tipoVenta";
router.get(`${endPointFacturacion}/${tipoVenta}/:id?`, tipoVentas_controller_1.getTipoVentas);
router.post(`${endPointFacturacion}/${tipoVenta}`, tipoVentas_controller_1.postTipoVenta);
router.put(`${endPointFacturacion}/${tipoVenta}/:id`, tipoVentas_controller_1.updateTipoVenta);
router.delete(`${endPointFacturacion}/${tipoVenta}/:id`, tipoVentas_controller_1.deleteTipoVenta);
exports.default = router;
//# sourceMappingURL=tipoVenta.route.js.map