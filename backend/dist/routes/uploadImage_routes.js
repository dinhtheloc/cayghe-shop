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
const utils_1 = require("../utils/utils");
const fileImageController_1 = require("../controllers/fileImageController");
const multer = require("multer");
const checkJwt_1 = require("../middlewares/checkJwt");
class UploadsRoutes {
    constructor() {
        this.upload = multer({ dest: `${process.env.UPLOAD_PATH}/`, fileFilter: utils_1.imageFilter, limits: { fieldSize: 25 * 1024 * 1024 } });
        this.fileImage_controller = new fileImageController_1.FileImageController();
    }
    route(app) {
        app.post('/api/uploadImage', this.upload.single('image'), [checkJwt_1.checkJwt], (req, res) => __awaiter(this, void 0, void 0, function* () {
            this.fileImage_controller.create_fileImage(req, res);
        }));
        app.get('/api/getImages', [checkJwt_1.checkJwt], (req, res) => {
            this.fileImage_controller.getFileImage(req, res);
        });
        app.delete('/api/deleteImage', [checkJwt_1.checkJwt], (req, res) => {
            this.fileImage_controller.delete_fileImage(req, res);
        });
    }
}
exports.UploadsRoutes = UploadsRoutes;
