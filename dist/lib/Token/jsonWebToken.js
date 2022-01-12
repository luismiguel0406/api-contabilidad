"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrarToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const index_1 = __importDefault(require("../../config/index"));
const registrarToken = (usuarioId) => {
    const token = jsonwebtoken_1.default.sign({ _id: usuarioId }, index_1.default.SECRET_KEY || "", {
        expiresIn: "12h",
    });
    return token;
};
exports.registrarToken = registrarToken;
//# sourceMappingURL=jsonWebToken.js.map