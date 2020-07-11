"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const service_1 = require("../modules/common/service");
const service_2 = require("../modules/products/service");
const utils_1 = require("../utils/utils");
class ProductsController {
    constructor() {
        this.productService = new service_2.default();
        this.changeToSlug = utils_1.changeToSlug;
        // public delete_fileImage(req: Request, res: Response) {
        //     const path = req.body.path;
        //     if (path) {
        //         this.fileImage_service.deleteFileImage(path, (err: any, delete_details) => {
        //             if (err) {
        //                 mongoError(err, res);
        //             } else if (delete_details.deletedCount !== 0) {
        //                 successResponse('delete successfull', null, res);
        //                 // remove file at uploads folder
        //                 fs.unlink(path, (err) => {
        //                     if (err) throw err;
        //                     console.log(`successfully deleted ${path}`);
        //                 });
        //             } else {
        //                 failureResponse('invalid', null, res);
        //             }
        //         });
        //     } else {
        //         insufficientParameters(res);
        //     }
        // }
    }
    createProduct(req, res) {
        const { name, alias, price, available, description, inventory } = req.body;
        if (name) {
            const product = {
                name: name.trim(),
                alias: alias || this.changeToSlug(name),
                price: price || 0,
                inventory: inventory || 0,
                description: description || '',
                available: available || false,
                createDate: new Date(),
                updateDate: new Date()
            };
            this.productService.createProduct(product, (err, data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse('create product successfull', data, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
    updateProduct(req, res) {
        const { id, name, price, available, description, inventory } = req.body;
        if (id) {
            const params = { _id: id };
            this.productService.findProduct(params, (err, product) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else if (product) {
                    product.updateDate = new Date(Date.now());
                    const ProductParams = {
                        _id: id,
                        name: name || product.name,
                        alias: name ? this.changeToSlug(name) : product.alias,
                        price: price || product.price,
                        inventory: inventory || product.inventory,
                        description: description || product.description,
                        available: available || product.available,
                        createDate: product.createDate,
                        updateDate: new Date()
                    };
                    this.productService.updateProduct(ProductParams, (err) => {
                        if (err) {
                            service_1.mongoError(err, res);
                        }
                        else {
                            service_1.successResponse('update successfull', ProductParams, res);
                        }
                    });
                }
                else {
                    service_1.failureResponse('invalid user', null, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
    getProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { pageIndex, pageSize } = req.body;
            if (pageIndex && pageSize) {
                const data = yield this.productService.getProducts(pageSize, pageIndex);
                const num = yield this.productService.getTotalProducts();
                const dataResponse = {
                    data: data,
                    pagination: {
                        pageIndex: pageIndex,
                        pageSize: pageSize,
                        totalSizes: num
                    }
                };
                res.status(200).json(dataResponse);
            }
            else {
                service_1.insufficientParameters(res);
            }
        });
    }
}
exports.ProductsController = ProductsController;
