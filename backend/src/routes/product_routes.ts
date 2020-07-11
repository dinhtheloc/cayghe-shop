

import { Application, Request, Response } from 'express';
import { ProductsController } from '../controllers/productsController';
export class ProductRoutes {
    private productsController = new ProductsController();
    public route(app: Application) {
        app.post('/api/createProduct', (req: Request, res: Response) => {
            this.productsController.createProduct(req, res);
        });


        app.get('/api/getProducts', (req: Request, res: Response) => {
            this.productsController.getProducts(req, res);
        });

        app.put('/api/updateProduct', (req: Request, res: Response) => {
            this.productsController.updateProduct(req, res);
        });

    }
}