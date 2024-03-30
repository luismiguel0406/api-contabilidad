import currencyModel from "../../../models/Facturacion/currency/currency.model";

export default class CurrencyService {
  async getCurrency(id: any = null) {
    const result =
      id === null
        ? await currencyModel.findAll({
            attributes: ["id", "description", "symbol", "state"],
            where: { state: true },
          })
        : await currencyModel.findOne({
            attributes: ["id", "description", "symbol", "state"],
            where: { id, state: true },
          });

    return result;
  }
}
