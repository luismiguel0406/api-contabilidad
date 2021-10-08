import { Request, Response } from "express";
import empresaService from "../services/empresa/empresa.service";

export const getEmpresa = async (req: Request, res: Response, next: any) => {
  try {
    const { id } = req.params;
    const empresa = new empresaService();
    const empresaResultado = await empresa.getEmpresa(id);
    if (empresaResultado === null) {
      return res.status(204).json({ Message: "No Content" });
    }
    res.status(200).json({ Empresa: empresaResultado });
  } catch (error) {
    res.status(500).json({ Message: "Error al buscar la empresa", error });
  }
};
