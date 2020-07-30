

import { Application, Request, Response } from 'express';
import { ProductsController } from '../controllers/productsController';
import { checkJwt } from "../middlewares/checkJwt";
export class ProductRoutes {
    private productsController = new ProductsController();
    public route(app: Application) {
        app.post('/api/product/create', [checkJwt], (req: Request, res: Response) => {
            this.productsController.createProduct(req, res);
        });

        app.get('/api/getProducts', (req: Request, res: Response) => {
            this.productsController.getProducts(req, res);
        });

        app.get('/api/product/:slug', (req: Request, res: Response) => {
            this.productsController.getOne(req, res);
        });

        app.put('/api/product/update', [checkJwt], (req: Request, res: Response) => {
            this.productsController.updateProduct(req, res);
        });

        app.delete('/api/deleteProduct', [checkJwt], (req: Request, res: Response) => {
            this.productsController.delete(req, res);
        });

    }
}