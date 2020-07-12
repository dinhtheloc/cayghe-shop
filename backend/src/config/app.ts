import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';
import configRouters from './configRouters';
import * as cors from "cors";
class App {
   public app: express.Application;


   constructor() {
      this.app = express();
      //options for cors midddleware
      // const options:cors.CorsOptions = {
      //    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
      //    credentials: true,
      //    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
      //    origin: "http://localhost:3000",
      //    preflightContinue: false
      // };
      //use cors middleware
      this.app.use(cors());
      this.config();
      this.mongoSetup();
      
      configRouters(this.app);
      //enable pre-flight
      // this.app.options("*", cors(options));
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