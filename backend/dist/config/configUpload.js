"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPLOAD_CONFIG = void 0;
const multer = require("multer");
exports.UPLOAD_CONFIG = multer({ dest: `${process.env.UPLOAD_PATH}/` });
