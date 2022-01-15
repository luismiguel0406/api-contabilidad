"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgRespuesta = void 0;
exports.MsgRespuesta = {
    Success: {
        msg: "Respuesta exitosa",
        statusCode: 200,
    },
    noContent: {
        msg: "Respuesta exitosa, Sin contenido que mostrar",
        statusCode: 204,
    },
    created: {
        msg: "Elemento creado",
        statusCode: 201,
    },
    badRequest: {
        msg: "No se pudo procear su solicitud",
        statusCode: 400,
    },
    notFound: {
        msg: "Oh oh! el contenido no fue encontrado",
        statusCode: 404,
    },
    internalError: {
        msg: "Error interno desde el servidor",
        statusCode: 500,
    },
    unauthorized: {
        msg: "Acceso denegado",
        statusCode: 401
    },
};
//# sourceMappingURL=MensajesRespuestaCliente.js.map