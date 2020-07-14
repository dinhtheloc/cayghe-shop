"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ImageSchema = new Schema({ index: Number, path: String, name: String });
const schema = new Schema({
    name: String,
    alias: String,
    price: Number,
    inventory: Number,
    images: [ImageSchema],
    description: String,
    available: Boolean,
    createDate: Date,
    updateDate: Date
});
exports.default = mongoose.model('products', schema);
