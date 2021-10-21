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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moneda_model_1 = __importDefault(require("../../models/moneda.model"));
const sequelize_1 = require("sequelize");
class monedaService {
    getMoneda(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const MonedaResult = yield moneda_model_1.default.findAll({
                where: {
                    id: {
                        [sequelize_1.Op.or]: {
                            [sequelize_1.Op.eq]: id,
                            [sequelize_1.Op.not]: null,
                        },
                    },
                },
            });
            return MonedaResult;
        });
    }
    updateMoneda(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield moneda_model_1.default.update(body, {
                where: {
                    id,
                    estado: "1",
                },
            });
        });
    }
    deleteMoneda(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield moneda_model_1.default.update({ estado: "0" }, {
                where: { id },
            });
        });
    }
    addMoneda(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield moneda_model_1.default.create(body);
        });
    }
}
exports.default = monedaService;
//# sourceMappingURL=monedas.service.js.map