"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function determinarEntradaContable(tipoCuenta, tipoEfecto) {
    if (tipoEfecto === 'aumento') {
        if (tipoCuenta === 'activo' || tipoCuenta === 'gasto') {
            return 'débito';
        }
        else if (tipoCuenta === 'pasivo' || tipoCuenta === 'capital' || tipoCuenta === 'ingreso') {
            return 'crédito';
        }
    }
    else if (tipoEfecto === 'disminucion') {
        if (tipoCuenta === 'activo' || tipoCuenta === 'gasto') {
            return 'crédito';
        }
        else if (tipoCuenta === 'pasivo' || tipoCuenta === 'capital' || tipoCuenta === 'ingreso') {
            return 'débito';
        }
    }
    return 'error';
}
exports.default = determinarEntradaContable;
//# sourceMappingURL=index.js.map