import { cliente } from "../../interfaces/cliente.interface";
import clientesModel from "../../models/Clientes/Cliente.model";
import tiposClientesModel from "../../models/Clientes/tiposClientes.model";

export default class ClientesService {
  async getTipoClientes(id: any = null) {
    const tipoClienteResult =
      id === null
        ? await tiposClientesModel.findAll({ where: { estado: "1" } })
        : await tiposClientesModel.findOne({ where: { id, estado: "1" } });

    return tipoClienteResult;
  }

  async getClientes(id: any = null) {
    const clientesResult =
      id === null
        ? await clientesModel.findAll({ where: { estado: "1" } })
        : await clientesModel.findOne({ where: { id, estado: "1" } });
    return clientesResult;
  }

  async addCliente(cliente: cliente) {
    await clientesModel.create(cliente);
  }

  // demas codigo aqui de cliente
}
