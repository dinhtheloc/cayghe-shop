"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
    name: String,
    path: String,
    createDate: Date
});
exports.default = mongoose.model('fileImage', schema);
