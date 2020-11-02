import { IConfig} from './IConfig';
let  enVars = require('dotenv').config()
console.log('Inside config', enVars);

// console.log(`real config is` ,enVars.parsed);
const config = enVars.parsed;
export default config;
Object.freeze(config);







