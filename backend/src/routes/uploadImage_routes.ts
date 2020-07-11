

import { Application, Request, Response } from 'express';
import { imageFilter } from '../utils/utils';
import { FileImageController } from '../controllers/fileImageController';
import * as multer from 'multer';

export class UploadsRoutes {

    private upload = multer({ dest: `${process.env.UPLOAD_PATH}/`, fileFilter: imageFilter });
    private fileImage_controller: FileImageController = new FileImageController();

    public route(app: Application) {
        app.post('/api/uploadImage', this.upload.single('image'), async (req, res) => {
            this.fileImage_controller.create_fileImage(req, res);
        });

        app.get('/api/getImage', (req: Request, res: Response) => {
            this.fileImage_controller.getFileImage(req, res);
        });

        app.delete('/api/deleteImage', (req: Request, res: Response) => {
            this.fileImage_controller.delete_fileImage(req, res);
        });
    }
}