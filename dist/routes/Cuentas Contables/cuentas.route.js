"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cuentaContable_controller_1 = require("../../Controllers/cuentaContable.controller");
const router = (0, express_1.Router)();
const endPointCuentas = '/api/cuentas';
router.get(`${endPointCuentas}/:id?`, cuentaContable_controller_1.postCuentaContable);
router.post(`${endPointCuentas}`, cuentaContable_controller_1.getCuentasContables);
router.put(`${endPointCuentas}/:id`, cuentaContable_controller_1.updateCuentasContables);
router.delete(`${endPointCuentas}/:id`, cuentaContable_controller_1.deleteCuentasContables);
exports.default = router;
//# sourceMappingURL=cuentas.route.js.map