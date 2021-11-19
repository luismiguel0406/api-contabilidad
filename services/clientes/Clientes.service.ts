import { Icliente } from "../../interfaces/cliente.interface";
import clientesModel from "../../models/Clientes/Cliente.model";
import tiposClientesModel from "../../models/Clientes/tiposClientes.model";

export default class ClientesService {
  
  //----------------TIPO CLIENTE------------------//

  async getTipoCliente(id: any = null) {
    const tipoClienteResult =
      id === null
        ? await tiposClientesModel.findAll({ where: { estado: "1" } })
        : await tiposClientesModel.findOne({ where: { id, estado: "1" } });

    return tipoClienteResult;
  };

  async addTipoCliente(body: any) {
    await clientesModel.create(body);
  };

  async updateTipoCliente(body: any, id: string) {
    await clientesModel.update(body, { where: { id }
    });
  };

  async deleteTipoCliente(id: string) {
    await clientesModel.update({ estadao: "0" }, { where: { id }
    });
  };

  //--------------------CLIENTES--------------------------//

  async getClientes(id: any = null) {
    const clientesResult =
      id === null
        ? await clientesModel.findAll({ where: { estado: "1" } })
        : await clientesModel.findOne({ where: { id, estado: "1" } });
    return clientesResult;
  };

  async addCliente(body:Icliente ) {
   
    await clientesModel.create(body);
    
  };

  async updateCliente(body: Icliente, id: string) {
    await clientesModel.update(body, { where: { id, estado: "1" } });
  };

  async deleteCliente(id: string) {
    await clientesModel.update({ estado: "0" }, { where: { id } });
  };
}
