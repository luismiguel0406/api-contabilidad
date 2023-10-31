export type TTipoGenerico = {
    id?:number;
    descripcion :string;
    createdAt:Date;
    updatedAt:Date | null;
    estado: boolean;
    usuario: string;
    terminal: string;
}