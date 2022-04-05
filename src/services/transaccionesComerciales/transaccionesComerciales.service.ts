import transaccionesComerciales from "../../models/TransaccionesComerciales/TransaccionesComerciales.model";

export default class TransaccionesComercialesService {
  async getTransaccionesComerciales(payload: string = "") {
    try {
      const transaccion = await transaccionesComerciales.findAll({
        where: { payload, estado : "1" },
      });
      return transaccion;
    } catch (error) {
      return error;
    }
  }
  //DEMAS SERVICIOS PARA ADMINISTRACION SOLAMENTE
}
