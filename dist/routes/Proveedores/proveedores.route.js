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
router.get(`/api/proveedores/tipoProveedor`, proveedores_controller_1.getTipoProveedor);
//TIPO SERVICIO
router.get(`/api/proveedores/tipoServicio`, proveedores_controller_1.getTipoServicio);
//TIPO DOCUMENTO
router.get(`/api/proveedores/tipoDocumento`, proveedores_controller_1.getTipoDocumento);
//BANCOS
router.get(`/api/proveedores/entidadBancaria`, proveedores_controller_1.getEntidadBancaria);
exports.default = router;
//# sourceMappingURL=proveedores.route.js.map