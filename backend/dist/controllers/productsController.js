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
const service_1 = require("../modules/products/service");
const utils_1 = require("../utils/utils");
class ProductsController {
    constructor() {
        this.productService = new service_1.default();
        this.changeToSlug = utils_1.changeToSlug;
        // public delete_fileImage(req: Request, res: Response) {
        //     const path = req.body.path;
        //     if (path) {
        //         this.fileImage_service.deleteFileImage(path, (err: any, delete_details) => {
        //             if (err) {
        //                 res.status(500).json({
        //     message: 'Lỗi hệ thống'
        // });
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
        const { name, alias, price, available, arrayImage, description, inventory } = req.body;
        if (name) {
            const product = {
                name: name.trim(),
                alias: alias || this.changeToSlug(name),
                price: price || 0,
                arrayImage: arrayImage || [],
                inventory: inventory || 0,
                description: description || '',
                available: available || false,
                createDate: new Date(),
                updateDate: new Date()
            };
            this.productService.createProduct(product, (err, data) => {
                if (err) {
                    res.status(500).json({
                        message: 'Lỗi hệ thống'
                    });
                }
                else {
                    res.status(200).json({
                        message: 'Tạo mới sản phẩm thành công',
                        data
                    });
                }
            });
        }
        else {
            res.status(400).json({
                message: 'Name là bắt buộc'
            });
        }
    }
    updateProduct(req, res) {
        const { id, name, price, available, description, arrayImage, inventory } = req.body;
        if (id) {
            const params = { _id: id };
            this.productService.findProduct(params, (err, product) => {
                if (err) {
                    res.status(500).json({
                        message: 'Lỗi hệ thống'
                    });
                }
                else if (product) {
                    product.updateDate = new Date(Date.now());
                    const ProductParams = {
                        _id: id,
                        name: name || product.name,
                        alias: name ? this.changeToSlug(name) : product.alias,
                        price: price || product.price,
                        inventory: inventory || product.inventory,
                        arrayImage: arrayImage || product.arrayImage,
                        description: description || product.description,
                        available: available || product.available,
                        createDate: product.createDate,
                        updateDate: new Date()
                    };
                    this.productService.updateProduct(ProductParams, (err) => {
                        if (err) {
                            res.status(500).json({
                                message: 'Lỗi hệ thống'
                            });
                        }
                        else {
                            res.status(500).json({
                                message: 'Cập nhật sản phẩm thành công',
                                ProductParams
                            });
                        }
                    });
                }
                else {
                    res.status(400).json({
                        message: 'Không tìm thấy sản phẩm'
                    });
                }
            });
        }
        else {
            res.status(400).json({
                message: 'Id là bắt buộc'
            });
        }
    }
    getProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { pageIndex, pageSize } = req.query;
            if (pageIndex && pageSize) {
                const data = yield this.productService.getProducts(Number(pageSize), Number(pageIndex));
                const num = yield this.productService.getTotalProducts();
                const dataResponse = {
                    data: data,
                    pagination: {
                        pageIndex: pageIndex,
                        pageSize: pageSize,
                        totalSize: num
                    }
                };
                res.status(200).json(dataResponse);
            }
            else {
                res.status(400).json({
                    message: 'pageIndex và pageSize là bắt buộc'
                });
            }
        });
    }
}
exports.ProductsController = ProductsController;
