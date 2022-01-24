"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tipoGasto_controller_1 = require("../../Controllers/tipoGasto.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
const endPointFacturacion = '/api/facturacion';
const tipoGasto = 'tipogasto';
router.get(`${endPointFacturacion}/${tipoGasto}/:id?`, tipoGasto_controller_1.getTipoGastos);
exports.default = router;
//# sourceMappingURL=tipoGastos.route.js.map