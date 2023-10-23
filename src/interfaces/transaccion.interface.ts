export interface ITransaccion{
  [index:number]:number;
  [index:symbol]:symbol;
    descripcion: string;
    payload:string;
    estado: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    usuario: string;
    terminal: string;
}