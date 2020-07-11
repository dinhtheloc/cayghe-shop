import { Application } from "express";
import { AuthRoutes } from "../routes/auth_routes";
import { UsersRoutes } from "../routes/user_routes";
import { UploadsRoutes } from "../routes/uploadImage_routes";
import { ProductRoutes } from "../routes/product_routes";
import { CommonRoutes } from "../routes/common_routes";

const configRouters = (app: Application) => {

    const authRoutes: AuthRoutes = new AuthRoutes();
    const usersRoutes: UsersRoutes = new UsersRoutes();
    const uploadsRoutes: UploadsRoutes = new UploadsRoutes();
    const common_routes: CommonRoutes = new CommonRoutes();
    const productRoutes: ProductRoutes = new ProductRoutes();
    
    authRoutes.route(app);
    usersRoutes.route(app);
    uploadsRoutes.route(app);
    productRoutes.route(app);
    common_routes.route(app);
}

export default configRouters;