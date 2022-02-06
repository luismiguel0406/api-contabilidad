import transaccionesComerciales from "models/TransaccionesComerciales/TransaccionesComerciales.model";

export default class TransaccionesComercialesService {
  async getTransaccionesComerciales(id: number, payload: string) {
    try {
      const transaccion = await transaccionesComerciales.findAll({
        where: { id, payload, estado : "1" },
      });
      return transaccion;
    } catch (error) {
      return error;
    }
  }
  //DEMAS SERVICIOS PARA ADMINISTRACION SOLAMENTE
}
