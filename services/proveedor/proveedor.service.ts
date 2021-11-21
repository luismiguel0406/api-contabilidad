import { ITipoPoveedor } from "../../interfaces/proveedor.interface";
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


  
}
