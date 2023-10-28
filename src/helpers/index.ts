const ACTIVO = 1;
const PASIVO = 2;
const CAPITAL = 3;
const INGRESO = 4;
const COSTO = 5;
const GASTO = 6;

const AUMENTO = 1;
const DISMINUCION = 2;


export default function determinarEntradaContable(tipoCuenta:number, tipoEfecto:number, monto:number ) {
    if (tipoEfecto === AUMENTO) {
        if (tipoCuenta === ACTIVO || tipoCuenta === GASTO) {

            return { debito: monto , credito: 0.00 };

        } else if (tipoCuenta === PASIVO || tipoCuenta === CAPITAL || tipoCuenta === INGRESO) {

            return { debito: 0.00, credito: monto };
        }
    } else if (tipoEfecto === DISMINUCION) {
        if (tipoCuenta === ACTIVO || tipoCuenta === GASTO) {

            return { debito: 0.00, credito: monto };

        } else if (tipoCuenta === PASIVO || tipoCuenta === CAPITAL || tipoCuenta === INGRESO) {

            return { debito: monto , credito: 0.00 };
        }
    }
    return { debito: 0.00, credito: 0.00 };
}

