"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const configRouters_1 = require("./configRouters");
const cors = require("cors");
class App {
    constructor() {
        this.app = express();
        //options for cors midddleware
        // const options:cors.CorsOptions = {
        //    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
        //    credentials: true,
        //    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
        //    origin: "http://localhost:3000",
        //    preflightContinue: false
        // };
        //use cors middleware
        this.app.use(cors());
        this.config();
        this.mongoSetup();
        configRouters_1.default(this.app);
        //enable pre-flight
        // this.app.options("*", cors(options));
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
