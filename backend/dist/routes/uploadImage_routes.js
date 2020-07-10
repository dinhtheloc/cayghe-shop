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
exports.UploadsRoutes = void 0;
const service_1 = require("../modules/common/service");
const utils_1 = require("../utils/utils");
const multer = require("multer");
class UploadsRoutes {
    constructor() {
        this.upload = multer({ dest: `${process.env.UPLOAD_PATH}/`, fileFilter: utils_1.imageFilter });
    }
    route(application) {
        application.post('/api/uploadImage', this.upload.single('image'), (req, res) => __awaiter(this, void 0, void 0, function* () {
            // if (req['file']) {
            // } else {
            //     insufficientParameters(res);
            // }
            try {
                console.log(req['file']);
                // res.send({ id: data.$loki, fileName: data.filename, originalName: data.originalname });
                service_1.successResponse('create user successfull', req, res);
            }
            catch (err) {
                service_1.insufficientParameters(res);
            }
        }));
    }
}
exports.UploadsRoutes = UploadsRoutes;