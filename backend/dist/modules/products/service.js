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
const schema_1 = require("./schema");
class FileImageService {
    createProduct(product_params, callback) {
        const _session = new schema_1.default(product_params);
        _session.save(callback);
    }
    findProduct(query) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const data = yield schema_1.default.find()
                .sort({ updateDate: 'descending' });
            resolve(data);
        }));
    }
    updateProduct(product_params, callback) {
        const query = { _id: product_params._id };
        schema_1.default.findOneAndUpdate(query, product_params, callback);
    }
    getProducts(pageSize, pageIndex) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const data = yield schema_1.default.find()
                .sort({ updateDate: 'descending' })
                .skip((pageSize * pageIndex) - pageSize)
                .limit(pageSize);
            resolve(data);
        }));
    }
    getTotalProducts() {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const query = {};
            const number = yield schema_1.default.count(query);
            resolve(number);
        }));
    }
    delete(_id, callback) {
        const query = { _id };
        schema_1.default.deleteOne(query, callback);
    }
}
exports.default = FileImageService;
