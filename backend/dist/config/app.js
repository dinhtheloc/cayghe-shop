"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const configRouters_1 = require("./configRouters");
class App {
    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
        configRouters_1.default(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use('/uploads', express.static('uploads'));
    }
    mongoSetup() {
        mongoose.connect(process.env.URL_MONGODB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
    }
}
exports.default = new App().app;
