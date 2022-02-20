import entradasContables from "models/EntradaContable/entradaContableHeader.model";
import { IEntradaContable } from "../../interfaces/entradaContable.interface";

export default class EntradaContableService {
  async addEntradaContable(payload:string, body:IEntradaContable) {
  
   const entradaContableSaved:any = await entradasContables.create(body);

   
    //codes here
  }
}
