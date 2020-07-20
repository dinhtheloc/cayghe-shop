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
    createFileImage(fileImage_params, callback) {
        const _session = new schema_1.default(fileImage_params);
        _session.save(callback);
    }
    filterFileImage(query, callback) {
        schema_1.default.findOne(query, callback);
    }
    getFileImage(pageSize, pageIndex, query) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const data = yield schema_1.default.find(query)
                .sort({ updateDate: 'descending' })
                .skip((pageSize * pageIndex) - pageSize)
                .limit(pageSize);
            resolve(data);
        }));
    }
    getAll() {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const data = yield schema_1.default.find();
            resolve(data);
        }));
    }
    getNumOfFileImage(query) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const number = yield schema_1.default.count(query);
            resolve(number);
        }));
    }
    deleteFileImage(path, callback) {
        const query = { path: path };
        schema_1.default.deleteOne(query, callback);
    }
}
exports.default = FileImageService;
