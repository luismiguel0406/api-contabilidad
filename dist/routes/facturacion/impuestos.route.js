"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const impuestos_controller_1 = require("../../Controllers/impuestos.controller");
const router = (0, express_1.Router)();
const endPointFacturacion = "/api/facturacion";
const impuestos = "impuestos";
router.get(`${endPointFacturacion}/${impuestos}/:id?`, impuestos_controller_1.getImpuestos);
router.post(`${endPointFacturacion}/${impuestos}`, impuestos_controller_1.postImpuesto);
router.put(`${endPointFacturacion}/${impuestos}/:id`, impuestos_controller_1.updateImpuesto);
router.delete(`${endPointFacturacion}/${impuestos}/:id`, impuestos_controller_1.deleteImpuesto);
exports.default = router;
//# sourceMappingURL=impuestos.route.js.map