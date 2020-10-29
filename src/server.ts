import * as express from 'express';
import * as bodyparser from 'body-parser';
import { notFoundRoute, errorHandler } from './libs/routes';

class Server {

    private app: any;
    constructor(private config) {
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
        this.app.use(notFoundRoute);

        this.app.use(errorHandler);
    }

    public initBodyParser() {
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
export default Server;