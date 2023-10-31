import { TCliente, TTipoGenerico } from "types";
import clientesModel from "../../models/Clientes/Cliente.model";
import tiposClientesModel from "../../models/Clientes/tipoCliente.model";

export default class ClientesService {
  
  //----------------TIPO CLIENTE------------------//

  async getTipoCliente(id: number = 0) {
    const tipoClienteResult =
      id === 0
        ? await tiposClientesModel.findAll({ where: { estado: true } })
        : await tiposClientesModel.findOne({ where: { id, estado: true} });

    return tipoClienteResult;
  };

  async addTipoCliente(body: TTipoGenerico) {
    await tiposClientesModel.create(body);
  };

  async updateTipoCliente(body: TTipoGenerico, id: number) {
    await tiposClientesModel.update(body, { where: { id }
    });
  };

  async deleteTipoCliente(id: number) {
    await tiposClientesModel.update({ estado: false }, { where: { id }
    });
  };

  //--------------------CLIENTES--------------------------//

  async getClientes(id: number = 0) {
    const clientesResult =
      id === 0
        ? await clientesModel.findAll({ where: { estado: true } })
        : await clientesModel.findOne({ where: { id, estado: true } });
    return clientesResult;
  };

  async addCliente(body:TCliente ) {
    await clientesModel.create(body);   
  };

  async updateCliente(body: TCliente, id: number) {
    await clientesModel.update(body, { where: { id, estado: true} });
  };

  async deleteCliente(id: string) {
    await clientesModel.update({ estado: false }, { where: { id } });
  };
}
