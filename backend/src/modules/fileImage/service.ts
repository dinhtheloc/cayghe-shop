import { IFileImage } from './model';
import fileImage from './schema';

export default class FileImageService {

    public createFileImage(fileImage_params: IFileImage, callback: any) {
        const _session = new fileImage(fileImage_params);
        _session.save(callback);
    }

    public filterFileImage(query: any, callback: any) {
        fileImage.findOne(query, callback);
    }

    public getFileImage(pageSize: number, pageIndex: number) {
        return new Promise(async (resolve) => {
            const data = await fileImage.find()
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize);
            resolve(data);
        });
    }

    public getNumOfFileImage() {
        return new Promise(async (resolve) => {
            const query = {};
            const number = await fileImage.count(query);
            resolve(number);
        });
    }

    public deleteFileImage(path: String, callback: any) {
        const query = { path: path };
        fileImage.deleteOne(query, callback);
    }

}