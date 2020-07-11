import { Request, Response } from 'express';
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service';
import { IFileImage } from '../modules/fileImage/model';
import * as fs from 'fs';
import FileImageService from '../modules/fileImage/service';

export class FileImageController {

    private fileImage_service: FileImageService = new FileImageService();

    public create_fileImage(req: Request, res: Response) {

        if (req['file']) {
            const processedFile = req['file'];
            let orgName = processedFile.originalname;
            orgName = orgName.trim().replace(/ /g, "-");
            const fullPathInServ = processedFile.path;
            const newFullPath = `${fullPathInServ}-${orgName}`;
            fs.renameSync(fullPathInServ, newFullPath);
            // add data mongodb
            const fileImage_params: IFileImage = {
                name: orgName,
                path: newFullPath,
                createDate: new Date()
            };
            this.fileImage_service.createFileImage(fileImage_params, (err: any, fileImage_data: IFileImage) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('upload file successfull', fileImage_data, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }

    public async getFileImage(req: Request, res: Response) {
        const { pageIndex, pageSize } = req.body;
        if (pageIndex && pageSize) {
            const data = await this.fileImage_service.getFileImage(pageSize, pageIndex);
            const num = await this.fileImage_service.getNumOfFileImage();

            const dataResponse = {
                data: data,
                pagination: {
                    pageIndex: pageIndex,
                    pageSize: pageSize,
                    totalSizes: num
                }
            }
            res.status(200).json(dataResponse);
        } else {
            insufficientParameters(res);
        }
    }

    public delete_fileImage(req: Request, res: Response) {
        const path = req.body.path;
        if (path) {
            this.fileImage_service.deleteFileImage(path, (err: any, delete_details) => {
                if (err) {
                    mongoError(err, res);
                } else if (delete_details.deletedCount !== 0) {
                    successResponse('delete successfull', null, res);
                    // remove file at uploads folder
                    fs.unlink(path, (err) => {
                        if (err) throw err;
                        console.log(`successfully deleted ${path}`);
                    });
                } else {
                    failureResponse('invalid', null, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }

}