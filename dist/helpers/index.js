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
/**
 * Determinacion de movimiento contable
 *
 * Indica posicionamiento de `crédito` o `débito` según
 * la cuenta que ingresa y el tipo de efecto
 *
 * @param tipoCuenta
 * @param tipoEfecto
 * @param monto
 * @returns
 */
function determinarEntradaContable(tipoCuenta, tipoEfecto, monto) {
    if (tipoEfecto === AUMENTO) {
        if (tipoCuenta === ACTIVO || tipoCuenta === GASTO) {
            return { debito: monto, credito: 0.0 };
        }
        else if (tipoCuenta === PASIVO ||
            tipoCuenta === CAPITAL ||
            tipoCuenta === INGRESO) {
            return { debito: 0.0, credito: monto };
        }
    }
    else if (tipoEfecto === DISMINUCION) {
        if (tipoCuenta === ACTIVO || tipoCuenta === GASTO) {
            return { debito: 0.0, credito: monto };
        }
        else if (tipoCuenta === PASIVO ||
            tipoCuenta === CAPITAL ||
            tipoCuenta === INGRESO) {
            return { debito: monto, credito: 0.0 };
        }
    }
    return { debito: 0.0, credito: 0.0 };
}
exports.default = determinarEntradaContable;
//# sourceMappingURL=index.js.map