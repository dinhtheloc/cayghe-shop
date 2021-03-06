import { Request, Response } from 'express';
import { IProduct } from '../modules/products/model';
import ProductsService from '../modules/products/service';
import { changeToSlug } from '../utils/utils';
export class ProductsController {

    private productService: ProductsService = new ProductsService();
    private changeToSlug = changeToSlug;

    public createProduct(req: Request, res: Response) {

        const { name, alias, linkShopee, price, available, images, description, inventory } = req.body;
        if (name) {

            const product: IProduct = {
                name: name.trim(),
                alias: alias || this.changeToSlug(name),
                price: price || 0,
                images: images || [],
                inventory: inventory || 0,
                linkShopee: linkShopee || '',
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

    public async updateProduct(req: Request, res: Response) {
        const { id,
            price,
            available,
            linkShopee,
            description,
            images,
            inventory } = req.body;
            console.log(req.body);
        if (id) {
            const params = { _id: id };
            const product: any = await this.productService.findOne(params);

            
            if (product) {
                product.updateDate = new Date(Date.now());

                const ProductParams: IProduct = {
                    _id: id,
                    name: product.name,
                    alias: product.alias,
                    price: price ? price : product.price,
                    inventory: inventory ? inventory : product.inventory,
                    images: images ? images : product.images,
                    linkShopee: linkShopee ? linkShopee : product.linkShopee,
                    description: description ? description : product.description,
                    available: available ? available : product.available,
                    createDate: product.createDate,
                    updateDate: new Date()
                };

                console.log(ProductParams);
                this.productService.updateProduct(ProductParams, (err: any) => {
                    if (err) {
                        res.status(500).json({
                            message: 'Lỗi hệ thống'
                        });
                    } else {
                        res.status(200).json({
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

        } else {
            res.status(400).json({
                message: 'Id là bắt buộc'
            });
        }
    }

    public async getProducts(req: Request, res: Response) {
        const { pageIndex, pageSize } = req.query;
        if (pageIndex && pageSize) {
            const data = await this.productService.getProducts(Number(pageSize), Number(pageIndex));
            const num = await this.productService.getTotalProducts();

            const dataResponse = {
                data: data,
                pagination: {
                    pageIndex: pageIndex,
                    pageSize: pageSize,
                    totalSize: num
                }
            }
            res.status(200).json(dataResponse);
        } else {
            res.status(400).json({
                message: 'pageIndex và pageSize là bắt buộc'
            });
        }
    }

    public async getOne(req: Request, res: Response) {
        const { slug } = req.params;
        if (slug) {
            const query = {
                alias: slug
            };
            const data = await this.productService.findProduct(query);
            if (data) {
                const dataResponse = {
                    data: data
                }
                res.status(200).json(dataResponse);
            } else {
                res.status(400).json({
                    message: 'Không tìm thấy sản phẩm'
                });
            }
        } else {
            res.status(400).json({
                message: 'pageIndex và pageSize là bắt buộc'
            });
        }
    }

    public delete(req: Request, res: Response) {
        const { _id } = req.body;
        if (_id) {
            this.productService.delete(_id, (err: any) => {
                if (err) {
                    res.status(500).json({
                        message: 'Lỗi hệ thống'
                    });
                } else {
                    res.status(200).json({
                        message: 'Xoá thành công'
                    });
                }
            });

        } else {
            res.status(400).json({
                message: 'Thiếu id'
            });
        }
    }

}