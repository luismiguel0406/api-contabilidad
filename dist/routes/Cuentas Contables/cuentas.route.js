"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonWebToken_1 = require("../../lib/Token/jsonWebToken");
const cuentaContable_controller_1 = require("../../controllers/cuentaContable.controller");
const router = (0, express_1.Router)();
const cuentaContable = "cuentaContable";
const tipoCuentas = "tipoCuentas";
const grupoCuenta = "grupoCuentas";
const movimiento = "movimiento";
// TIPOS //
router.get(`api/cuentas/${tipoCuentas}/:id?`, cuentaContable_controller_1.getTiposCuentasContables);
//GRUPOS//
router.get(`api/cuentas/${grupoCuenta}/:id?`, cuentaContable_controller_1.getGrupoCuentasContables);
router.post(`api/cuentas/${grupoCuenta}`, cuentaContable_controller_1.postGrupoCuentaContable);
router.put(`api/cuentas/${grupoCuenta}/:id`, cuentaContable_controller_1.updateGrupoCuentasContables);
router.delete(`api/cuentas/${grupoCuenta}/:id`, cuentaContable_controller_1.deleteGrupoCuentasContables);
// CUENTAS //
router.get(`api/cuentas/${cuentaContable}/:id?`, jsonWebToken_1.ValidarToken, cuentaContable_controller_1.getCuentasContables);
router.post(`api/cuentas/${grupoCuenta}`, cuentaContable_controller_1.postGrupoCuentaContable);
router.put(`api/cuentas/${grupoCuenta}/:id`, cuentaContable_controller_1.updateGrupoCuentasContables);
router.delete(`api/cuentas/${grupoCuenta}/:id`, cuentaContable_controller_1.deleteGrupoCuentasContables);
// MOVIMIENTO //
router.post(`api/cuentas/${movimiento}`, cuentaContable_controller_1.postMovimientoCuenta);
router.get(`api/cuentas/${movimiento}/:id?/:fechaInicio?/:fechaFin?`, cuentaContable_controller_1.getMovimientoCuenta);
exports.default = router;
//# sourceMappingURL=cuentas.route.js.map