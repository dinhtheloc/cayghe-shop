"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const test_routes_1 = require("../routes/test_routes");
const user_routes_1 = require("../routes/user_routes");
const uploadImage_routes_1 = require("../routes/uploadImage_routes");
const common_routes_1 = require("../routes/common_routes");
class App {
    constructor() {
        this.test_routes = new test_routes_1.TestRoutes();
        this.usersRoutes = new user_routes_1.UsersRoutes();
        this.uploadsRoutes = new uploadImage_routes_1.UploadsRoutes();
        this.common_routes = new common_routes_1.CommonRoutes();
        this.app = express();
        this.config();
        this.mongoSetup();
        this.test_routes.route(this.app);
        this.usersRoutes.route(this.app);
        this.uploadsRoutes.route(this.app);
        this.common_routes.route(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.connect(process.env.URL_MONGODB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
    }
}
exports.default = new App().app;
