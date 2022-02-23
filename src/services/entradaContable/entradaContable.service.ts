import entradasContables from "models/EntradaContable/entradaContableHeader.model";
import { IEntradaContableDetalle } from "../../interfaces/entradaContable.interface";


export default class EntradaContableService {
  async addEntradaContable(payload: string, data: any) {
   
   
    const entradaContableSaved: any = await entradasContables.create(data);
   
   
   
   
   
    let objetoEntrada:IEntradaContableDetalle;

    data.forEach((element: any) => {
      objetoEntrada.cuenta = element.cuentaContable;;
      objetoEntrada.debito = element.valor;
      objetoEntrada.credito = 0;
      objetoEntrada.comentario = 'NO COMENTARIO';
      objetoEntrada.estado = true;
      objetoEntrada.entradaId = 

      
    });

    

    //codes here
  }
}
