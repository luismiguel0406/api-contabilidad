import AccionesEntradaContableService from "../services/AccioneseEntradaContable/AccionesEntradaContable.service";
import TransaccionesComerciales from "../services/transaccionesComerciales/transaccionesComerciales.service";

const transaccionComercial_service = new TransaccionesComerciales();
const accionEntrada_service = new AccionesEntradaContableService();

export const generarDetalleEntradaContable = async (
  detalle: any,
  payload: string
) => {
  const transaccion:any =  await transaccionComercial_service.getTransaccionesComerciales(payload);
  const data = transaccion[0].transaccionesComerciales
  console.log(data,"la data")
 // const accionesContables = await accionEntrada_service.getAccionEntrada(data.id);
 // return accionesContables
   // ESTO ME TRAE DEBITO Y CREDITO SEGUN EL TIPO DE CUENTA
 
  /* for await (let item of detalle){
   // Detalle cuenta 
   // Linea de detalle factura
   // Se deberia Tomar la cuenta contable, su tipo y de acuerdo a este , indicar si va en debito o credito
   // EN BASE DE DATOS select * from transacciones comerciales  where transaccion comercial igual a la operacion
   // Entonces  hago un SWITCH CASE ETC ETC
   }*/
};
