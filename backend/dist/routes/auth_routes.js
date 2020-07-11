"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const authController_1 = require("../controllers/authController");
class AuthRoutes {
    constructor() {
        this.authController = new authController_1.default();
    }
    route(app) {
        app.post('/api/login', (req, res) => {
            this.authController.login(req, res);
        });
    }
}
exports.AuthRoutes = AuthRoutes;
