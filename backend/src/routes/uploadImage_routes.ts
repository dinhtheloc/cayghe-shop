import { Application } from 'express';
import app from '../config/app';
import {UPLOAD_CONFIG} from '../config/configUpload';

export class UploadsRoutes {
    public route(application: Application) {

        application.post('/profile', UPLOAD_CONFIG.single('avatar'), async (req, res) => {
            console.log(req);
            // try {
                // const col = await loadCollection(COLLECTION_NAME, db);
                // const data = col.insert(req.file);
        
                // db.saveDatabase();
                // res.send({ id: data.$loki, fileName: data.filename, originalName: data.originalname });
            // } catch (err) {
                // res.sendStatus(400);
            // }
        })

    }
}