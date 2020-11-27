import { IConfig} from './IConfig';
let  envVars = require('dotenv').config()
console.log('Inside config', envVars);

// console.log(`real config is` ,enVars.parsed);
const config: IConfig = { PORT: envVars.parsed.PORT , NODE_ENV: envVars.parsed.NODE_ENV, MONGO_URL: envVars.parsed.MONGO_URL,  KEY: envVars.parsed.KEY, password: envVars.parsed.PASSWORD};
Object.freeze(config);
export default config;







