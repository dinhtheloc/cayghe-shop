import { IProduct } from './model';
import products from './schema';

export default class FileImageService {

    public createProduct(product_params: IProduct, callback: any) {
        const _session = new products(product_params);
        _session.save(callback);
    }

    public findProduct(query: any) {
        return new Promise(async (resolve) => {
            const data = await products.find()
            .sort({updateDate: 'descending'});
            resolve(data);
        });
        
    }

    public findOne(query: any) {
        return new Promise(async (resolve) => {
            const data = await products.findOne(query);
            resolve(data);
        });
        
    }

    public updateProduct(product_params: IProduct, callback: any) {
        const query = { _id: product_params._id };
        products.findOneAndUpdate(query, product_params, callback);
    }

    public getProducts(pageSize: number, pageIndex: number) {
        return new Promise(async (resolve) => {
            const data = await products.find()
            .sort({updateDate: 'descending'})
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize);
            resolve(data);
        });
    }

    public getTotalProducts() {
        return new Promise(async (resolve) => {
            const query = {};
            const number = await products.count(query);
            resolve(number);
        });
    }

    public delete(_id: String, callback: any) {
        const query = { _id };
        products.deleteOne(query, callback);
    }

}