"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    HOST_DB: process.env.HOST_DB,
    USER_DB: process.env.USER_DB,
    DATABASE_NAME: process.env.DATABASE_NAME,
    PASSWORD_DB: process.env.PASSWORD_DB,
    DATABASE_URL: process.env.DATABASE_URL
};
//# sourceMappingURL=index.js.map