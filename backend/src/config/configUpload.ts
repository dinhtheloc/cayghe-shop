import * as multer from 'multer';

export const UPLOAD_CONFIG = multer({ dest: `${process.env.UPLOAD_PATH}/` });