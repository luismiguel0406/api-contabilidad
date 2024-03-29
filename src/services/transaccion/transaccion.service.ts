import transaction from "../../models/Transaction/Transaction.model";

export default class TransaccionService {
  async getTransaccion(payload: string = "") {
    try {
      return await transaction.findOne({
        attributes: ["id", "nombre"],
        where: { payload, estado: true },
      });
    } catch (error) {
      return error;
    }
  }
  //DEMAS SERVICIOS PARA ADMINISTRACION SOLAMENTE
}
