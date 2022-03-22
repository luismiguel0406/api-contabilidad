"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class EntradaContableService {
    facturaPorPagar(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { total, comentario, empresaId, createdAt, usuario, terminal, id, detalleFacturaPorPagar } = data;
            let entradaContable = {
                noEntrada: 25,
                totalDebito: total,
                totalCredito: total,
                comentario,
                estado: true,
                createdAt,
                updatedAt: null,
                usuario,
                terminal,
                empresaId,
                transaccionComercialId: 1,
                transaccionId: id,
                detalle: [
                    {
                        debito: 1,
                        credito: 2,
                        descripcionCuenta: "No descripcion",
                        cuenta: "4654654",
                    },
                    {
                        debito: 1,
                        credito: 2,
                        descripcionCuenta: "No descripcion",
                        cuenta: "4654654",
                    },
                ],
            };
            return { entradaContable };
        });
    }
}
exports.default = EntradaContableService;
//# sourceMappingURL=entradaContable.service.js.map