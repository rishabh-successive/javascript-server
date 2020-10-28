import Server from './server'
import config from './config/configuration';

console.log("config is",config);

const server = new Server ( {port : config.PORT});

server.bootstrap().run();
