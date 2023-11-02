  export type TGrupoCuentaContable = {
    id?:number;
    cuenta: string;
    descripcion: string;
    estado: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    usuario: string;
    terminal: string;
    tipoCuentaContableId: number | null;
    monedaId: number;
  }
  export type TCuentaContable = {
    id?:number;
    noCuenta: string;
    descripcion: string;
    estado: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    usuario: string;
    terminal: string;
    tipoCuentaId: number;
    grupoCuentaId: number;
    monedaId:number;
    empresaId: number;
  }
  export type TMovimientoCuentas = {
    id?:number;
    createdAt: Date;
    updatedAt:Date | null;
    cuentaId:number;
    tipoRegistroId:number;
    tipoEfectoId:number;
    monto:number;
    descripcion:string;
    estado:boolean;
    usuario:string;
    terminal:string;
    referenciaId:number;
    transaccionId:number;
    saldo:number;
  }