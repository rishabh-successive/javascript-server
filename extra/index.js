import {diamond,triangle} from "./patterns"

console.log(diamond(5));
console.log("print the equilateral triangle")
console.log(triangle(5));

import {hasPermission,validateUser} from "./utils"

import {getUsers,getDetails,users} from "./constants"

console.log("trainer have access to delete ")
console.log (hasPermission(getUsers,"trainer","Delete"));

console.log(validateUser(users));
console.log("email you enter")