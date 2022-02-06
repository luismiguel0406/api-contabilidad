export interface ITransaccionComercial{
    
    descripcion: string;
    payload:string;
    estado: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    usuario: string;
    terminal: string;
}