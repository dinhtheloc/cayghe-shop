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
exports.FileImageController = void 0;
const fs = require("fs");
const service_1 = require("../modules/fileImage/service");
class FileImageController {
    constructor() {
        this.fileImage_service = new service_1.default();
    }
    create_fileImage(req, res) {
        if (req['file']) {
            const processedFile = req['file'];
            let orgName = processedFile.originalname;
            orgName = orgName.trim().replace(/ /g, "-");
            const fullPathInServ = processedFile.path;
            const newFullPath = `${fullPathInServ}-${orgName}`;
            fs.renameSync(fullPathInServ, newFullPath);
            // add data mongodb
            const fileImage_params = {
                name: orgName,
                path: newFullPath,
                createDate: new Date()
            };
            this.fileImage_service.createFileImage(fileImage_params, (err, fileImage_data) => {
                if (err) {
                    res.status(500).json({
                        message: 'Lỗi hệ thống'
                    });
                }
                else {
                    res.status(200).json({
                        message: 'Tải file thành công',
                        data: fileImage_data
                    });
                }
            });
        }
        else {
            res.status(400).json({
                message: 'File là bắt buộc',
                data: {}
            });
        }
    }
    getFileImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { pageIndex, pageSize } = req.query;
            if (pageIndex && pageSize) {
                const name = req.query.name || '';
                const query = {
                    'name': { $regex: name, $options: "i" }
                };
                const data = yield this.fileImage_service.getFileImage(Number(pageSize), Number(pageIndex), query);
                const num = yield this.fileImage_service.getNumOfFileImage(query);
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
                    message: 'pageIndex và pageSize là bắt buộc',
                    data: {}
                });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.fileImage_service.getAll();
            const dataResponse = {
                data: data
            };
            res.status(200).json(dataResponse);
        });
    }
    delete_fileImage(req, res) {
        const path = req.body.path;
        if (path) {
            this.fileImage_service.deleteFileImage(path, (err, delete_details) => {
                if (err) {
                    res.status(500).json({
                        message: 'Lỗi hệ thống'
                    });
                }
                else if (delete_details.deletedCount !== 0) {
                    res.status(200).json({
                        message: 'Xoá file thành công',
                        data: {}
                    });
                    // remove file at uploads folder
                    fs.unlink(path, (err) => {
                        console.log(err);
                        if (err) {
                            res.status(500).json({
                                message: 'Lỗi hệ thống'
                            });
                        }
                        console.log(`successfully deleted ${path}`);
                    });
                }
                else {
                    res.status(500).json({
                        message: 'Lỗi hệ thống',
                        data: {}
                    });
                }
            });
        }
        else {
            res.status(400).json({
                message: 'Thiếu đường dẫn',
                data: {}
            });
        }
    }
}
exports.FileImageController = FileImageController;
