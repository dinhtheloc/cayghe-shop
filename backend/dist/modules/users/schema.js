"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
    name: {
        type: {
            firstName: String,
            lastName: String
        }
    },
    email: String,
    password: String,
    phoneNumber: String,
    role: String,
    gender: String,
    isDeleted: {
        type: Boolean,
        default: false
    },
    createDate: Date,
    updateDate: Date
});
exports.default = mongoose.model('users', schema);
