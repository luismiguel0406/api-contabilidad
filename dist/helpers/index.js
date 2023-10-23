"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ACTIVO = 1;
const PASIVO = 2;
const CAPITAL = 3;
const INGRESO = 4;
const COSTO = 5;
const GASTO = 6;
const AUMENTO = 1;
const DISMINUCION = 2;
function determinarEntradaContable(tipoCuenta, tipoEfecto, detalle) {
    if (tipoEfecto === AUMENTO) {
        if (tipoCuenta === ACTIVO || tipoCuenta === GASTO) {
            return { debito: detalle.valor, credito: 0.00 };
        }
        else if (tipoCuenta === PASIVO || tipoCuenta === CAPITAL || tipoCuenta === INGRESO) {
            return { debito: 0.00, credito: detalle.valor };
        }
    }
    else if (tipoEfecto === DISMINUCION) {
        if (tipoCuenta === ACTIVO || tipoCuenta === GASTO) {
            return { debito: 0.00, credito: detalle.valor };
        }
        else if (tipoCuenta === PASIVO || tipoCuenta === CAPITAL || tipoCuenta === INGRESO) {
            return { debito: detalle.valor, credito: 0.00 };
        }
    }
    return { debito: 0.00, credito: 0.00 };
}
exports.default = determinarEntradaContable;
//# sourceMappingURL=index.js.map