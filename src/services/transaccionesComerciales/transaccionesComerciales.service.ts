import transaccionesComerciales from "../../models/TransaccionesComerciales/TransaccionesComerciales.model";

export default class TransaccionesComercialesService {
  async getTransaccionesComerciales(payload: string = "") {
    try {
      return await transaccionesComerciales.findOne({
        attributes:["id","descripcion"],
        where: { payload, estado : "1" },
      });    
    } catch (error) {
      return error;
    }
  }
  //DEMAS SERVICIOS PARA ADMINISTRACION SOLAMENTE
}
