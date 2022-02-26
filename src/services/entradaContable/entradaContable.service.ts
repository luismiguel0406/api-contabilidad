import entradasContables from "models/EntradaContable/entradaContableHeader.model";
import { IEntradaContableDetalle } from "../../interfaces/entradaContable.interface";


export default class EntradaContableService {


async filtrarEntrada(data:any){
  const { total, comentario, empresaId, createdAt, usuario, terminal } = data;


 let entradaHeader= {
   totalDebito : total,
   toTalCredito :total,
   comentario,
   estado:true,
   createdAt,
   updateAt:null,
   usuario,
   terminal,
   empresaId
 }

 return {entradaHeader}

}


  async addEntradaContable(payload: string, data: any) {
   
   
    const entradaContableSaved: any = await entradasContables.create(data);
   
   
   
   
   
    let objetoEntrada:IEntradaContableDetalle;

    data.forEach((element: any) => {
      objetoEntrada.cuenta = element.cuentaContable;;
      objetoEntrada.debito = element.valor;
      objetoEntrada.credito = 0;
      objetoEntrada.estado = true;
      objetoEntrada.entradaId = 1

      
    });

    

    //codes here
  }
}
