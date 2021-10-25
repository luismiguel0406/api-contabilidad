"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cuentaContable_controller_1 = require("../../Controllers/cuentaContable.controller");
const router = (0, express_1.Router)();
const endPointCuentas = '/api/cuentasContables';
router.post(`${endPointCuentas}/addCuenta`, cuentaContable_controller_1.postCuentaContable);
exports.default = router;
//# sourceMappingURL=cuentas.route.js.map