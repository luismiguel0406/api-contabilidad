import TransaccionService from "services/transaccion/transaccion.service";

export default class EntradaContableService{

    private _transaccionId: number = 0;

    //1- Otengo id de la transaccion en curso
    async getTransaccionInit(payload: string) {
        const transaccion_service = new TransaccionService(); 
        const transaccion :any = await transaccion_service.getTransaccion(payload);
        return transaccion.id;
      }
}