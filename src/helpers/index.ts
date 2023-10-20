
export default function determinarEntradaContable(tipoCuenta:string, tipoEfecto:string) {
    if (tipoEfecto === 'aumento') {
        if (tipoCuenta === 'activo' || tipoCuenta === 'gasto') {
            return 'débito';
        } else if (tipoCuenta === 'pasivo' || tipoCuenta === 'capital' || tipoCuenta === 'ingreso') {
            return 'crédito';
        }
    } else if (tipoEfecto === 'disminucion') {
        if (tipoCuenta === 'activo' || tipoCuenta === 'gasto') {
            return 'crédito';
        } else if (tipoCuenta === 'pasivo' || tipoCuenta === 'capital' || tipoCuenta === 'ingreso') {
            return 'débito';
        }
    }
    return 'error';
}

