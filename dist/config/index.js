"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    DB_NAME: process.env.DB_NAME,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    HOST: process.env.HOST,
    SECRET_KEY: process.env.SECRET_KEY,
    SALT_ROUND: process.env.SALT_ROUND
};
//# sourceMappingURL=index.js.map