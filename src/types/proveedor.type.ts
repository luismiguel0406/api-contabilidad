export type TProveedor = {
    id?:number;
    nombre: string;
    documento: string;
    createdAt: Date;
    updatedAt: Date | null;
    estado: boolean;
    tipoContactoId: number;
    tipoProveedorId: number;
    usuario: string;
    terminal: string;
  }
  