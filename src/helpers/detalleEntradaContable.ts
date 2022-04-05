import TransaccionesComerciales from "../services/transaccionesComerciales/transaccionesComerciales.service";

const transaccionComercial_service = new TransaccionesComerciales();

export const generarDetalleEntradaContable = async (
  detalle: any,
  payload: string
) => {
  const movimientosEntradaContable: any =
    await transaccionComercial_service.getTransaccionesComerciales(payload);

  const movimientoTipoCuentaContable = (movimientos: any) => {
    console.log("Movimientos", movimientos);
  };

   return movimientosEntradaContable

  /* for await (let item of detalle){
   // Detalle cuenta 
   // Linea de detalle factura
   // Se deberia Tomar la cuenta contable, su tipo y de acuerdo a este , indicar si va en debito o credito
   // EN BASE DE DATOS select * from transacciones comerciales  where transaccion comercial igual a la operacion
   // Entonces  hago un SWITCH CASE ETC ETC

 

   }*/
};
