"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const productsController_1 = require("../controllers/productsController");
const checkJwt_1 = require("../middlewares/checkJwt");
class ProductRoutes {
    constructor() {
        this.productsController = new productsController_1.ProductsController();
    }
    route(app) {
        app.post('/api/createProduct', (req, res) => {
            this.productsController.createProduct(req, res);
        });
        app.get('/api/getProducts', [checkJwt_1.checkJwt], (req, res) => {
            this.productsController.getProducts(req, res);
        });
        app.put('/api/updateProduct', (req, res) => {
            this.productsController.updateProduct(req, res);
        });
    }
}
exports.ProductRoutes = ProductRoutes;
