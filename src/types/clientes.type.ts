export type TCliente = {
    id?:number;
    nombre: string;
    documento: string;
    direccion: string;
    pagaItbis: boolean;
    estado: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    usuario: string;
    terminal: string;
    tipoContactoId: number;
    tipoClienteId: number;
  }