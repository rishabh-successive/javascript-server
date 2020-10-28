import Server from './server'
import { config } from './config'

console.log("config is",config)

const server = new Server ();

server.bootstrap().run()
