"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proveedores_controller_1 = require("../../controllers/proveedores.controller");
const router = (0, express_1.Router)();
const endPointProveedores = "/api/proveedores";
const proveedor = "proveedor";
const tipoProveedor = "tipo";
//PROVEEDORES
router.get(`${endPointProveedores}/${proveedor}:id?`, proveedores_controller_1.getProveedores);
router.post(`${endPointProveedores}/${proveedor}`, proveedores_controller_1.postProveedor);
router.put(`${endPointProveedores}/${proveedor}/:id`, proveedores_controller_1.updateProveedores);
router.delete(`${endPointProveedores}/${proveedor}/:id`, proveedores_controller_1.deleteProveedor);
//TIPO PROVEEDORES
router.get(`${endPointProveedores}/${tipoProveedor}:id?`, proveedores_controller_1.getTipoProveedor);
router.post(`${endPointProveedores}/${tipoProveedor}`, proveedores_controller_1.postTipoProveedor);
router.put(`${endPointProveedores}/${tipoProveedor}/:id`, proveedores_controller_1.updateTipoProveedor);
router.delete(`${endPointProveedores}/${tipoProveedor}/:id`, proveedores_controller_1.deleteTipoProveedor);
exports.default = router;
//# sourceMappingURL=proveedores.route.js.map