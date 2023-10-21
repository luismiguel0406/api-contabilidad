import transaccion from "../../models/Transaccion/Transaccion.model";

export default class TransaccionService {
  async getTransaccion(payload: string = "") {
    try {
      return await transaccion.findOne({
        attributes: ["id", "descripcion"],
        where: { payload, estado: "1" },
      });
    } catch (error) {
      return error;
    }
  }
  //DEMAS SERVICIOS PARA ADMINISTRACION SOLAMENTE
}
