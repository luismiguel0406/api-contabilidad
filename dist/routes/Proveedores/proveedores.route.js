"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proveedores_controller_1 = require("../../controllers/proveedores.controller");
const router = (0, express_1.Router)();
//PROVEEDORES
router.get(`/api/proveedores/proveedor:id?`, proveedores_controller_1.getProveedores);
router.post(`/api/proveedores/proveedor`, proveedores_controller_1.postProveedor);
router.put(`/api/proveedores/proveedor/:id`, proveedores_controller_1.updateProveedores);
router.delete(`/api/proveedores/proveedor/:id`, proveedores_controller_1.deleteProveedor);
//TIPO PROVEEDORES
router.get(`/api/proveedores/tipoProveedor/:id?`, proveedores_controller_1.getTipoProveedor);
router.post(`/api/proveedores/tipoProveedor`, proveedores_controller_1.postTipoProveedor);
router.put(`/api/proveedores/:id`, proveedores_controller_1.updateTipoProveedor);
//TIPO SERVICIO
router.get(`/api/proveedores/tipoServicio`, proveedores_controller_1.getTipoServicio);
exports.default = router;
//# sourceMappingURL=proveedores.route.js.map