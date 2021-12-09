"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comprobante_controller_1 = require("../../Controllers/comprobante.controller");
const router = (0, express_1.Router)();
const endPointFacturacion = '/api/facturacion';
const TipoComprobante = 'tipoComprobante';
router.get(`${endPointFacturacion}/${TipoComprobante}/:id?`, comprobante_controller_1.getTipoComprobante);
router.post(`${endPointFacturacion}/${TipoComprobante}`, comprobante_controller_1.postTipoComprobante);
router.put(`${endPointFacturacion}/${TipoComprobante}/:id`, comprobante_controller_1.updateTipoComprobante);
router.delete(`${endPointFacturacion}/${TipoComprobante}/:id`, comprobante_controller_1.deleteTipoComprobante);
exports.default = router;
//# sourceMappingURL=comprobante.route.js.map