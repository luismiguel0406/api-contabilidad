import { TSupplier } from "types";
import { Transaction } from "sequelize";
import supplierModel from "../../models/suppliers/suppliers.model";
import typeSupplierModel from "../../models/suppliers/typeSupplier.model";
import typeServiceModel from "../../models/suppliers/typeService.model";
import typeDocumentModel from "../../models/suppliers/typeDocument.model";
import bankModel from "../../models/suppliers/banks.model";

export default class SupplierService {
  //-------- TIPO PROVEEDOR --------//

  async getTypeSupplier() {
    const result = await typeSupplierModel.findAll({
      where: { state: true },
    });
    return result;
  }

  //--------- PROVEEDOR -----------//

  async getSuppliers(id: any = null) {
    const result = await supplierModel.findAll({
      include: [
        {
          model: typeSupplierModel,
          attributes: ["description"],
          required: true,
          where: { state: true },
        },
        {
          model: typeDocumentModel,
          attributes: ["description"],
          required: true,
          where: { state: true },
        },
        {
          model: typeServiceModel,
          attributes: ["description"],
          required: true,
          where: { state: true },
        },
        {
          model: bankModel,
          attributes: ["description"],
          required: true,
          where: { state: true },
        },
      ],

      where: id === null ? { state: true } : { id, state: true },
    });

    return result;
  }

  async addSupplier(body: TSupplier, transaction: Transaction) {
    const result = await supplierModel.create(body, { transaction });
    return result;
  }

  async updateSupplier(body: TSupplier, id: string) {
    await supplierModel.update(body, { where: { id, state: false } });
  }

  async deleteSupplier(id: number) {
    await supplierModel.update({ state: false }, { where: { id } });
  }

  //------------ TIPO SERVICIO PROVEEDOR----------------//

  async getTypeService() {
    const result = await typeServiceModel.findAll({
      where: { state: true },
    });
    return result;
  }

  //---------------- TIPO DOCUMENTO ---------------//

  async getTypeDocument() {
    const result = await typeDocumentModel.findAll({
      where: { state: true },
    });
    return result;
  }

  async getBanks() {
    const result = await bankModel.findAll({
      where: { state: true },
    });
    return result;
  }
}
