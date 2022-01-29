"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cuentaContable_controller_1 = require("../../Controllers/cuentaContable.controller");
const router = (0, express_1.Router)();
const endPointCuentas = "/api/cuentas";
const tipoCuentas = "tipoCuentas";
// TIPOS //
router.get(`${endPointCuentas}/${tipoCuentas}/:id?`, cuentaContable_controller_1.getTiposCuentasContables);
//SUBTIPOS//
router.get(`${endPointCuentas}/:id?`, cuentaContable_controller_1.getGrupoCuentasContables);
router.post(`${endPointCuentas}`, cuentaContable_controller_1.postGrupoCuentaContable);
router.put(`${endPointCuentas}/:id`, cuentaContable_controller_1.updateGrupoCuentasContables);
router.delete(`${endPointCuentas}/:id`, cuentaContable_controller_1.deleteGrupoCuentasContables);
exports.default = router;
//# sourceMappingURL=cuentas.route.js.map