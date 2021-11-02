"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cuentaContable_controller_1 = require("../../../Controllers/cuentaContable.controller");
const router = (0, express_1.Router)();
const endPointCuentas = '/api/cuentasContables';
router.post(`${endPointCuentas}/addCuenta`, cuentaContable_controller_1.postCuentaContable);
router.get(`${endPointCuentas}/:id?`, cuentaContable_controller_1.getCuentasContables);
router.put(`${endPointCuentas}/updateCuenta/:id?`, cuentaContable_controller_1.updateCuentasContables);
router.put(`${endPointCuentas}/deleteCuenta/:id?`, cuentaContable_controller_1.deleteCuentasContables);
exports.default = router;
//# sourceMappingURL=cuentas.route.js.map