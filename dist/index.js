"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const patterns_1 = require("./patterns");
patterns_1.diamond(5);
console.log("print the equilateral triangle");
patterns_1.triangle(5);
const utils_1 = require("./utils");
const constants_1 = require("./constants");
console.log("trainer have access to delete ");
console.log(utils_1.hasPermission(constants_1.getUsers, "trainer", "Delete"));
utils_1.validateUser(constants_1.users);
// console.log("email you enter")
//# sourceMappingURL=index.js.map