"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (err, req, res, next) => {
    res.status(err.code).json({
        error: err.error,
        message: err.message || "Error",
        status: err.code,
        timestamp: new Date()
    });
};
//# sourceMappingURL=errorHandler.js.map