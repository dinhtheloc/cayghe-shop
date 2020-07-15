

import { Application, Request, Response } from 'express';
import { imageFilter } from '../utils/utils';
import { FileImageController } from '../controllers/fileImageController';
import * as multer from 'multer';
import { checkJwt } from "../middlewares/checkJwt";

export class UploadsRoutes {

    private upload = multer({ dest: `${process.env.UPLOAD_PATH}/`, fileFilter: imageFilter, limits: { fieldSize: 25 * 1024 * 1024 } });
    private fileImage_controller: FileImageController = new FileImageController();

    public route(app: Application) {
        app.post('/api/uploadImage', this.upload.single('image'), [checkJwt], async (req, res) => {
            this.fileImage_controller.create_fileImage(req, res);
        });

        app.get('/api/getImages', [checkJwt], (req: Request, res: Response) => {
            this.fileImage_controller.getFileImage(req, res);
        });

        app.delete('/api/deleteImage', [checkJwt], (req: Request, res: Response) => {
            this.fileImage_controller.delete_fileImage(req, res);
        });
    }
}