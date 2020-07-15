

import { Application, Request, Response } from 'express';
import { ProductsController } from '../controllers/productsController';
import { checkJwt } from "../middlewares/checkJwt";
export class ProductRoutes {
    private productsController = new ProductsController();
    public route(app: Application) {
        app.post('/api/createProduct', [checkJwt], (req: Request, res: Response) => {
            this.productsController.createProduct(req, res);
        });

        app.get('/api/getProducts', (req: Request, res: Response) => {
            this.productsController.getProducts(req, res);
        });

        // [checkJwt]

        app.put('/api/updateProduct', [checkJwt], (req: Request, res: Response) => {
            this.productsController.updateProduct(req, res);
        });

    }
}