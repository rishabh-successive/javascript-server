"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let enVars = require('dotenv').config();
console.log('Inside config', enVars);
// console.log(`real config is` ,enVars.parsed);
const config = enVars.parsed;
exports.default = config;
Object.freeze(config);
//# sourceMappingURL=configuration.js.map