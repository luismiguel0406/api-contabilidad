import transaction from "../../models/Transaction/Transaction.model";

export default class TransactionService {
  async getTransaction(payload: string = "") {
    try {
      return await transaction.findOne({
        attributes: ["id", "nombre"],
        where: { payload, state: true },
      });
    } catch (error) {
      return error;
    }
  }
  //DEMAS SERVICIOS PARA ADMINISTRACION SOLAMENTE
}
