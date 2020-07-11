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
const service_1 = require("../modules/common/service");
const fs = require("fs");
const service_2 = require("../modules/fileImage/service");
class FileImageController {
    constructor() {
        this.fileImage_service = new service_2.default();
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
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse('upload file successfull', fileImage_data, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
    getFileImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { pageIndex, pageSize } = req.body;
            if (pageIndex && pageSize) {
                const data = yield this.fileImage_service.getFileImage(pageSize, pageIndex);
                const num = yield this.fileImage_service.getNumOfFileImage();
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
    delete_fileImage(req, res) {
        const path = req.body.path;
        if (path) {
            this.fileImage_service.deleteFileImage(path, (err, delete_details) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else if (delete_details.deletedCount !== 0) {
                    service_1.successResponse('delete successfull', null, res);
                    // remove file at uploads folder
                    fs.unlink(path, (err) => {
                        if (err)
                            throw err;
                        console.log(`successfully deleted ${path}`);
                    });
                }
                else {
                    service_1.failureResponse('invalid', null, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
}
exports.FileImageController = FileImageController;
