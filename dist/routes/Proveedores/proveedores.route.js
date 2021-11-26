"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proveedores_controller_1 = require("../../Controllers/proveedores.controller");
const router = (0, express_1.Router)();
const endPointProveedores = "/api/proveedores";
const tipoProveedor = "tipo";
//PROVEEDORES
router.get(`${endPointProveedores}/:id?`, proveedores_controller_1.getProveedores);
router.post(`${endPointProveedores}`, proveedores_controller_1.postProveedor);
router.put(`${endPointProveedores}/:id`, proveedores_controller_1.updateProveedores);
router.delete(`${endPointProveedores}/:id`, proveedores_controller_1.deleteProveedor);
//TIPO PROVEEDORES
router.get(`${endPointProveedores}/${tipoProveedor}:id?`, proveedores_controller_1.getTipoProveedor);
router.post(`${endPointProveedores}/${tipoProveedor}`, proveedores_controller_1.postTipoProveedor);
router.put(`${endPointProveedores}/${tipoProveedor}/:id`, proveedores_controller_1.updateTipoProveedor);
router.delete(`${endPointProveedores}/${tipoProveedor}/:id`, proveedores_controller_1.deleteTipoProveedor);
exports.default = router;
//# sourceMappingURL=proveedores.route.js.map