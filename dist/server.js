"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyparser = require("body-parser");
const routes_1 = require("./libs/routes");
class Server {
    constructor(config) {
        this.config = config;
        this.app = express();
    }
    bootstrap() {
        this.initBodyParser();
        this.SetupRoutes();
        return this;
    }
    SetupRoutes() {
        this.app.use('/health-check', (req, res, next) => {
            res.send('i am ok');
        });
        this.app.use(routes_1.notFoundRoute);
        this.app.use(routes_1.errorHandler);
    }
    initBodyParser() {
        this.app.use(bodyparser.json({ type: 'application/*+json' }));
    }
    run() {
        // const {app, config: {PORT}} = this;
        this.app.listen(this.config.PORT, (err) => {
            if (err) {
                console.log(err);
            }
            console.log(`App is running on port ${this.config.PORT}`);
        });
        return this;
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map