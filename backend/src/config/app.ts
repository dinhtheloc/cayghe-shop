import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';
import { TestRoutes } from "../routes/test_routes";
import { UsersRoutes } from "../routes/user_routes";
import { UploadsRoutes } from "../routes/uploadImage_routes";
import { CommonRoutes } from "../routes/common_routes";


class App {
   public app: express.Application;

   private test_routes: TestRoutes = new TestRoutes();
   private usersRoutes: UsersRoutes = new UsersRoutes();
   private uploadsRoutes: UploadsRoutes = new UploadsRoutes();
   private common_routes: CommonRoutes = new CommonRoutes();
   constructor() {
      this.app = express();
      this.config();
      this.mongoSetup();
      this.test_routes.route(this.app);
      this.usersRoutes.route(this.app);
      this.uploadsRoutes.route(this.app);
      this.common_routes.route(this.app);
   }

   private config(): void {
      // support application/json type post data
      this.app.use(bodyParser.json());
      //support application/x-www-form-urlencoded post data
      this.app.use(bodyParser.urlencoded({ extended: false }));
   }

   private mongoSetup(): void {
      mongoose.connect(process.env.URL_MONGODB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
   }

}
export default new App().app;