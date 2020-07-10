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
const configUpload_1 = require("../config/configUpload");
class UploadsRoutes {
    route(application) {
        application.post('/profile', configUpload_1.UPLOAD_CONFIG.single('avatar'), (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log(req);
            // try {
            // const col = await loadCollection(COLLECTION_NAME, db);
            // const data = col.insert(req.file);
            // db.saveDatabase();
            // res.send({ id: data.$loki, fileName: data.filename, originalName: data.originalname });
            // } catch (err) {
            // res.sendStatus(400);
            // }
        }));
    }
}
exports.UploadsRoutes = UploadsRoutes;
