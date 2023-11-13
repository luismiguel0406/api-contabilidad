import { TProveedor } from "types";
import ProveedoresModel from "../../models/Proveedores/Proveedores.model";
import tipoProveedorModel from "../../models/Proveedores/tipoProveedores.model";
import tipoServicioModel from "../../models/Proveedores/tipoServicio.model";
import tipoDocumentoModel from "../../models/Proveedores/tipoDocumento.model";

export default class ProveedorService {
  //-------- TIPO PROVEEDOR --------//

  async getTipoProveedor() {
    const tipoProveedorResult = await tipoProveedorModel.findAll({
      where: { estado: true },
    });
    return tipoProveedorResult;
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
    await ProveedoresModel.update({ estado: false }, { where: { id } });
  }

  //------------ TIPO SERVICIO PROVEEDOR----------------//

  async getTipoServicio() {
    const tipoServicio = await tipoServicioModel.findAll({
      where: { estado: true },
    });
    return tipoServicio;
  }

  //---------------- TIPO DOCUMENTO ---------------//

  async getTipoDocumento() {
    const tipoDocumento = await tipoDocumentoModel.findAll({
      where: { estado: true },
    });
    return tipoDocumento;
  }
}
