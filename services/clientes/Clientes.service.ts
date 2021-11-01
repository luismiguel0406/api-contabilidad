import tiposClientes from "../../models/tiposClientes.model"

export default class ClientesService{

 async getClientes(id:any = null){

    const clienteResult = id === null
    ? await tiposClientes.findAll({where:{ estado:"1" }})
    : undefined

    return clienteResult;
 }

};