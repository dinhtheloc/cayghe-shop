import { Request, Response } from 'express';
import { IProduct } from '../modules/products/model';
import ProductsService from '../modules/products/service';
import { changeToSlug } from '../utils/utils';
export class ProductsController {

    private productService: ProductsService = new ProductsService();
    private changeToSlug = changeToSlug;

    public createProduct(req: Request, res: Response) {
        const { name, alias, price, available, description, inventory } = req.body;
        if (name) {
            const product: IProduct = {
                name: name.trim(),
                alias: alias || this.changeToSlug(name),
                price: price || 0,
                inventory: inventory || 0,
                description: description || '',
                available: available || false,
                createDate: new Date(),
                updateDate: new Date()
            };
            this.productService.createProduct(product, (err: any, data: IProduct) => {
                if (err) {
                    res.status(500).json({
                        message: 'Lỗi hệ thống'
                    });
                } else {
                    res.status(200).json({
                        message: 'Tạo mới sản phẩm thành công',
                        data
                    });
                }
            });
        } else {
            res.status(400).json({
                message: 'Name là bắt buộc'
            });
        }
    }

    public updateProduct(req: Request, res: Response) {
        const { id, name, price, available, description, inventory } = req.body;
        if (id) {
            const params = { _id: id };
            this.productService.findProduct(params, (err: any, product: IProduct) => {
                if (err) {
                    res.status(500).json({
                        message: 'Lỗi hệ thống'
                    });
                } else if (product) {
                    product.updateDate = new Date(Date.now());

                    const ProductParams: IProduct = {
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
                    this.productService.updateProduct(ProductParams, (err: any) => {
                        if (err) {
                            res.status(500).json({
                                message: 'Lỗi hệ thống'
                            });
                        } else {
                            res.status(500).json({
                                message: 'Cập nhật sản phẩm thành công',
                                ProductParams
                            });
                        }
                    });
                } else {
                    res.status(400).json({
                        message: 'Không tìm thấy sản phẩm'
                    });
                }
            });
        } else {
            res.status(400).json({
                message: 'Id là bắt buộc'
            });
        }
    }

    public async getProducts(req: Request, res: Response) {
        const { pageIndex, pageSize } = req.body;
        if (pageIndex && pageSize) {
            const data = await this.productService.getProducts(pageSize, pageIndex);
            const num = await this.productService.getTotalProducts();

            const dataResponse = {
                data: data,
                pagination: {
                    pageIndex: pageIndex,
                    pageSize: pageSize,
                    totalSizes: num
                }
            }
            res.status(200).json(dataResponse);
        } else {
            res.status(400).json({
                message: 'Name là bắt buộc'
            });
        }
    }

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