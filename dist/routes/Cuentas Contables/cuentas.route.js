"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonWebToken_1 = require("../../lib/Token/jsonWebToken");
const cuentaContable_controller_1 = require("../../Controllers/cuentaContable.controller");
const router = (0, express_1.Router)();
const cuentaContable = "cuentaContable";
const tipoCuentas = "tipoCuentas";
const grupoCuenta = "grupoCuentas";
const movimiento = 'movimiento';
router.use("/api/cuentas");
// TIPOS //
router.get(`${tipoCuentas}/:id?`, cuentaContable_controller_1.getTiposCuentasContables);
//GRUPOS//
router.get(`${grupoCuenta}/:id?`, cuentaContable_controller_1.getGrupoCuentasContables);
router.post(`${grupoCuenta}`, cuentaContable_controller_1.postGrupoCuentaContable);
router.put(`${grupoCuenta}/:id`, cuentaContable_controller_1.updateGrupoCuentasContables);
router.delete(`${grupoCuenta}/:id`, cuentaContable_controller_1.deleteGrupoCuentasContables);
// CUENTAS //
router.get(`${cuentaContable}/:id?`, jsonWebToken_1.ValidarToken, cuentaContable_controller_1.getCuentasContables);
router.post(`${grupoCuenta}`, cuentaContable_controller_1.postGrupoCuentaContable);
router.put(`${grupoCuenta}/:id`, cuentaContable_controller_1.updateGrupoCuentasContables);
router.delete(`${grupoCuenta}/:id`, cuentaContable_controller_1.deleteGrupoCuentasContables);
// MOVIMIENTO //
router.post(`${movimiento}`, cuentaContable_controller_1.postMovimientoCuenta);
router.get(`${movimiento}/:id?/:fechaInicio?/:fechaFin?`, cuentaContable_controller_1.getMovimientoCuenta);
exports.default = router;
//# sourceMappingURL=cuentas.route.js.map