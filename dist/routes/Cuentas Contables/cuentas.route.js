"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonWebToken_1 = require("../../lib/Token/jsonWebToken");
const cuentaContable_controller_1 = require("../../Controllers/cuentaContable.controller");
const router = (0, express_1.Router)();
const endPointCuentas = "/api/cuentas";
const cuentaContable = "cuentaContable";
const tipoCuentas = "tipoCuentas";
const grupoCuenta = "grupoCuentas";
const movimiento = 'movimiento';
// TIPOS //
router.get(`${endPointCuentas}/${tipoCuentas}/:id?`, cuentaContable_controller_1.getTiposCuentasContables);
//GRUPOS//
router.get(`${endPointCuentas}/${grupoCuenta}/:id?`, cuentaContable_controller_1.getGrupoCuentasContables);
router.post(`${endPointCuentas}/${grupoCuenta}`, cuentaContable_controller_1.postGrupoCuentaContable);
router.put(`${endPointCuentas}/${grupoCuenta}/:id`, cuentaContable_controller_1.updateGrupoCuentasContables);
router.delete(`${endPointCuentas}/${grupoCuenta}/:id`, cuentaContable_controller_1.deleteGrupoCuentasContables);
// CUENTAS //
router.get(`${endPointCuentas}/${cuentaContable}/:id?`, jsonWebToken_1.ValidarToken, cuentaContable_controller_1.getCuentasContables);
router.post(`${endPointCuentas}/${grupoCuenta}`, cuentaContable_controller_1.postGrupoCuentaContable);
router.put(`${endPointCuentas}/${grupoCuenta}/:id`, cuentaContable_controller_1.updateGrupoCuentasContables);
router.delete(`${endPointCuentas}/${grupoCuenta}/:id`, cuentaContable_controller_1.deleteGrupoCuentasContables);
// MOVIMIENTO //
router.post(`${endPointCuentas}/${movimiento}`, cuentaContable_controller_1.postMovimientoCuenta);
router.get(`${endPointCuentas}/${movimiento}/:id?`, cuentaContable_controller_1.getMovimientoCuenta);
exports.default = router;
//# sourceMappingURL=cuentas.route.js.map