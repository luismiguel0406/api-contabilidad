import { TTipoGenerico, TProveedor } from "types";
import ProveedoresModel from "../../models/Proveedores/Proveedores.model";
import tipoProveedorModel from "../../models/Proveedores/tipoProveedores.model";

export default class ProveedorService {
  //-------- TIPO PROVEEDOR --------//

    async getTipoProveedor(id: number = 0) {
      const tipoProveedorResult =
        id === 0
          ? await tipoProveedorModel.findAll({ where: { estado: "1" } })
          : await tipoProveedorModel.findOne({ where: { id, estado: "1"} });

      return tipoProveedorResult;
    }


    async addTipoProveedor(body: TTipoGenerico) {
      await tipoProveedorModel.create(body);
    }

    
    async deleteTipoProveedor(id: string) {
      await tipoProveedorModel.update({ estado: false}, { where: { id } });
    }
    async updateTipoProveedor(body: TTipoGenerico, id: number) {
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
          ? await ProveedoresModel.findAll({ where: { estado: true } })
          : await ProveedoresModel.findOne({ where: { id, estado: true } });

      return proveedorResult;
    }

    async addProveedor(body: TProveedor) {
      await ProveedoresModel.create(body);
    }

    async updateProveedor(body: TProveedor, id: string) {
      await ProveedoresModel.update(body, { where: { id, estado: false } });
    }

    async deleteProveedor(id: number) {
      await ProveedoresModel.update({ estado: false}, { where: { id } });
    }
}
