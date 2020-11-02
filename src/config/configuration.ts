import { IConfig} from './IConfig';
let  enVars = require('dotenv').config()
console.log('Inside config', enVars);

// console.log(`real config is` ,enVars.parsed);
const config = enVars.parsed;
console.log('real value',config);
Object.freeze(config);
export default config;







