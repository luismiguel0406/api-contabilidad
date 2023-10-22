import TransaccionService from "services/transaccion/transaccion.service";
import transaccion from '../../models/Transaccion/Transaccion.model';

export default class EntradaContableService{

    private _transaccionId: number = 0;

    //1- Otengo id de la transaccion en curso
    async getTransaccionInit(payload: string) {
        const transaccion_service = new TransaccionService(); 
        const transaccion :any = await transaccion_service.getTransaccion(payload);
        const { id } = transaccion

      //2- Busco las acciones que se haran relativa a esta transaccion

      const accionContable = await transaccion.findAll({
        where:{id, estado:"1"}
      })
       
      return accionContable;
    
      }

    

    
}