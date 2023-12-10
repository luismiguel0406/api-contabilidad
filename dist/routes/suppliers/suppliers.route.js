"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const supplier_controller_1 = require("../../controllers/supplier.controller");
const router = (0, express_1.Router)();
//PROVEEDORES
router.get(`/api/suppliers/supplier:id?`, supplier_controller_1.getSuppliers);
router.post(`/api/suppliers/supplier`, supplier_controller_1.postSupplier);
router.put(`/api/suppliers/supplier/:id`, supplier_controller_1.updateSupplier);
router.delete(`/api/suppliers/supplier/:id`, supplier_controller_1.deleteSupplier);
//TIPO PROVEEDORES
router.get(`/api/suppliers/typeSupplier`, supplier_controller_1.getTypeSupplier);
//TIPO SERVICIO
router.get(`/api/suppliers/typeService`, supplier_controller_1.getTypeService);
//TIPO DOCUMENTO
router.get(`/api/suppliers/typeDocument`, supplier_controller_1.getTypeDocument);
//BANCOS
router.get(`/api/suppliers/bank`, supplier_controller_1.getBank);
exports.default = router;
//# sourceMappingURL=suppliers.route.js.map