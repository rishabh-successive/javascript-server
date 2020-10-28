import dotenv = require ('dotenv');

const enVars = dotenv.config(); // .config method







console.log('Inside config', enVars);

const config =enVars; // config variable
Object.freeze(config);

export default config;