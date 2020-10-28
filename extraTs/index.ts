import {diamond,triangle} from "./patterns"

diamond(5);
console.log("print the equilateral triangle")
triangle(5);

import {hasPermission,validateUser} from "./utils"

import {getUsers,getDetails,users} from "./constants"

console.log("trainer have access to delete ")
console.log (hasPermission(getUsers,"trainer","Delete"));

validateUser(users);
// console.log("email you enter")