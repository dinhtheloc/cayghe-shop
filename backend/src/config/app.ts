import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';

import configRouters from './configRouters';

class App {
   public app: express.Application;

   
   constructor() {
      this.app = express();
      this.config();
      this.mongoSetup();
      configRouters(this.app);
   }

   private config(): void {
      // support application/json type post data
      this.app.use(bodyParser.json());
      //support application/x-www-form-urlencoded post data
      this.app.use(bodyParser.urlencoded({ extended: false }));
      this.app.use('/uploads', express.static('uploads'));
   }

   private mongoSetup(): void {
      mongoose.connect(process.env.URL_MONGODB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
   }

}
export default new App().app;