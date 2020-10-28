"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateEmail(email) {
    const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return (reg.test(email));
}
exports.default = validateEmail;
//# sourceMappingURL=helpers.js.map