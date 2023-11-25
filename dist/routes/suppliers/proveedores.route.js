"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const supplier_controller_1 = require("../../controllers/supplier.controller");
const router = (0, express_1.Router)();
//PROVEEDORES
router.get(`/api/proveedores/proveedor:id?`, supplier_controller_1.getSuppliers);
router.post(`/api/proveedores/proveedor`, supplier_controller_1.postSupplier);
router.put(`/api/proveedores/proveedor/:id`, supplier_controller_1.updateSupplier);
router.delete(`/api/proveedores/proveedor/:id`, supplier_controller_1.deleteSupplier);
//TIPO PROVEEDORES
router.get(`/api/proveedores/tipoProveedor`, supplier_controller_1.getTypeSupplier);
//TIPO SERVICIO
router.get(`/api/proveedores/tipoServicio`, supplier_controller_1.getTypeService);
//TIPO DOCUMENTO
router.get(`/api/proveedores/tipoDocumento`, supplier_controller_1.getTypeDocument);
//BANCOS
router.get(`/api/proveedores/banco`, supplier_controller_1.getBank);
exports.default = router;
//# sourceMappingURL=proveedores.route.js.map