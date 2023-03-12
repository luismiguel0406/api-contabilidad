export interface IMoneda{
      [index:number]: number;
      [index:symbol]: symbol;
      descripcion:string;
      simbolo:string;
      estado:boolean;
      createdAt: Date
      updatedAt: Date | null
      usuario: string;
      terminal: string

}