import { Request, Response } from 'express';
import * as fs from 'fs';
import { IFileImage } from '../modules/fileImage/model';
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
                    res.status(500).json({
                        message: 'Lỗi hệ thống'
                    });
                } else {
                    res.status(200).json({
                        message: 'Tải file thành công',
                        data: fileImage_data
                    });
                }
            });
        } else {
            res.status(400).json({
                message: 'File là bắt buộc',
                data: {}
            });
        }
    }

    public async getFileImage(req: Request, res: Response) {
        const { pageIndex, pageSize } = req.query;
        if (pageIndex && pageSize) {
            const name = req.query.name || '';
            const query = {
                'name': { $regex: name, $options: "i" }
            }

            const data = await this.fileImage_service.getFileImage(Number(pageSize), Number(pageIndex), query);
            const num = await this.fileImage_service.getNumOfFileImage(query);

            const dataResponse = {
                data: data,
                pagination: {
                    pageIndex: pageIndex,
                    pageSize: pageSize,
                    totalSize: num
                }
            }
            res.status(200).json(dataResponse);
        } else {
            res.status(400).json({
                message: 'pageIndex và pageSize là bắt buộc',
                data: {}
            });
        }
    }

    public async getAll(req: Request, res: Response) {
        const data = await this.fileImage_service.getAll();
        const dataResponse = {
            data: data
        }
        res.status(200).json(dataResponse);
    }



    public delete_fileImage(req: Request, res: Response) {
        const path = req.body.path;
        if (path) {
            this.fileImage_service.deleteFileImage(path, (err: any, delete_details) => {
                if (err) {
                    res.status(500).json({
                        message: 'Lỗi hệ thống'
                    });
                } else if (delete_details.deletedCount !== 0) {
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
                } else {
                    res.status(500).json({
                        message: 'Lỗi hệ thống',
                        data: {}
                    });
                }
            });
        } else {
            res.status(400).json({
                message: 'Thiếu đường dẫn',
                data: {}
            });
        }
    }

}