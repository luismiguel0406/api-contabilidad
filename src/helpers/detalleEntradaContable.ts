import AccionesEntradaContableService from "../services/AccioneseEntradaContable/AccionesEntradaContable.service";
import TransaccionesComerciales from "../services/transaccionesComerciales/transaccionesComerciales.service";

const transaccionComercial_service = new TransaccionesComerciales();
const accionEntrada_service = new AccionesEntradaContableService();

//este metodo se refactorizo 
export const generarDetalleEntradaContable = async (
  detalle: any,
  payload: string
) => {
  const transaccion = <any>(
    await transaccionComercial_service.getTransaccionComercial(payload)
  );
  const accionesContables = <Array<any>>(
    await accionEntrada_service.getAccionEntrada(transaccion.id)
  );
  let entradaContable: any = [];

  for await (let d of detalle) {
    let accionContableFiltered = accionesContables.filter(
      (a: any) => a.tipoCuentaId == d.tipoCuentaId
    );
    switch (accionContableFiltered[0]?.accion) {
      case "CREDITO":
        entradaContable.push({
          credito: d.valor,
          debito: 0,
          descripcionCuenta: d.descripcionCuenta,
          cuenta: d.cuenta,
        });

        break;
      case "DEBITO":
        entradaContable.push({
          credito: 0,
          debito: d.valor,
          descripcionCuenta: d.descripcionCuenta,
          cuenta: d.cuenta,
        });

        break;
      default:
        break;
    }
  }
};
