import {
  IProveedor,
  ITipoPoveedor,
} from "../../interfaces/proveedor.interface";
import ProveedoresModel from "../../models/Proveedores/Proveedores.model";
import tipoProveedorModel from "../../models/Proveedores/tipoProveedores.model";

export default class ProveedorService {
  //-------- TIPO PROVEEDOR --------//

  async getTipoProveedor(id: any = null) {
    const tipoProveedorResult =
      id === null
        ? await tipoProveedorModel.findAll({ where: { estado: "1" } })
        : await tipoProveedorModel.findOne({ where: { id, estado: "1" } });

    return tipoProveedorResult;
  }
  async addTipoProveedor(body: ITipoPoveedor) {
    await tipoProveedorModel.create(body);
  }

  async deleteTipoProveedores(id: string) {
    await tipoProveedorModel.update({ estado: "0" }, { where: { id } });
  }
  async updateTipoProveedor(body: ITipoPoveedor, id: string) {
    await tipoProveedorModel.update(body, {
      where: {
        id,
        estado: "1",
      },
    });
  }

  //--------- PROVEEDOR -----------//

  async getProveedores(id: any = null) {
    const proveedorResult =
      id === null
        ? await ProveedoresModel.findAll({ where: { estado: "1" } })
        : await ProveedoresModel.findOne({ where: { id, estado: "1" } });

    return proveedorResult;
  }

  async addProveedores(body: IProveedor) {
    await ProveedoresModel.create(body);
  }

  async updateProveedor(body: IProveedor, id: string) {
    await ProveedoresModel.update(body, { where: { id, estado: "1" } });
  }

  async deleteProveedor(id: string) {
    await ProveedoresModel.update({ estado: "0" }, { where: { id } });
  }
}
