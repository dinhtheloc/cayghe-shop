

import { Application } from 'express';
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service';
import { imageFilter } from '../utils/utils';
import * as multer from 'multer';


export class UploadsRoutes {

    private upload = multer({ dest: `${process.env.UPLOAD_PATH}/`, fileFilter: imageFilter });

    public route(application: Application) {
        application.post('/api/uploadImage', this.upload.single('image'), async (req, res, err) => {

                if (err instanceof multer.MulterError) {
                    insufficientParameters(res);
                } else if (err) {
                    insufficientParameters(res);
                }
            if (req['file']) {
                
            } else {
                insufficientParameters(res);
            }
            // try {
            //     console.log(req['file']);
            //     // res.send({ id: data.$loki, fileName: data.filename, originalName: data.originalname });
            //     successResponse('create user successfull', req, res);
            // } catch (err) {
            //     insufficientParameters(res);
            // }
        })

    }
}