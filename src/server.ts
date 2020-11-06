import * as express from 'express';
import * as bodyparser from 'body-parser';
import { notFoundRoute, errorHandler } from './libs/routes';
import mainRouter from './router';
import { Database }from './libs';
class Server {

     app: any;
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

        this.app.use('/api',mainRouter);

        this.app.use(notFoundRoute);

        this.app.use(errorHandler);
    }

    public initBodyParser() {
      this.app.use(bodyparser.json({ type: 'application/*+json' }));
    }
    run() {
        const { app, config:{PORT,  mongo: MONGO_URL}} = this;
        //console.log("url for mongo is",MONGO_URL);
        Database.open('mongodb://localhost:27017/express-training')
        .then((res) => {
            console.log("Successfully connected to mongo")
            app.listen(PORT, (err) => {
                if (err) {
                    console.log(err);
                }
                console.log(`App is running on port ${this.config.PORT}`);
    
            });
        })
        .catch((err) => {
            if (err) {
                console.log(err);
            }
        })
        // const {app, config: {PORT}} = this;
       // return this;
    }
}
export default Server;