"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const configJWT_1 = require("../config/configJWT");
const service_1 = require("../modules/users/service");
const utils_1 = require("../utils/utils");
class AuthController {
    constructor() {
        this.userService = new service_1.default();
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            //Check if username and password are set
            let { email, password } = req.body;
            if (!(email && password)) {
                res.status(400).json({
                    message: 'Email và Password là bắt buộc',
                    data: {}
                });
                return;
            }
            //Get user from database
            const query = {
                email: email
            };
            this.userService.filterUser(query, (err, user_data) => {
                if (err) {
                    res.status(500).json({
                        message: 'Lỗi hệ thống'
                    });
                }
                else {
                    if (user_data) {
                        // Check if encrypted password match
                        const isValidPassword = utils_1.checkIfUnencryptedPasswordIsValid(password, user_data.password);
                        if (isValidPassword) {
                            //Sing JWT, valid for 1 hour
                            const token = jwt.sign({ _id: user_data._id, email: user_data.email }, configJWT_1.default.jwtSecret, { expiresIn: "1h" });
                            //Send the jwt in the response
                            res.status(200).json({
                                message: 'Đăng nhập thành công',
                                data: {
                                    token: token,
                                    email: user_data.email
                                }
                            });
                        }
                        else {
                            res.status(400).json({
                                message: 'Tài khoản và mật khẩu không đúng',
                                data: {}
                            });
                        }
                    }
                    else {
                        res.status(400).json({
                            message: 'Tài khoản và mật khẩu không đúng',
                            data: {}
                        });
                    }
                }
            });
        });
        //   static changePassword = async (req: Request, res: Response) => {
        //     //Get ID from JWT
        //     const id = res.locals.jwtPayload.userId;
        //     //Get parameters from the body
        //     const { oldPassword, newPassword } = req.body;
        //     if (!(oldPassword && newPassword)) {
        //       res.status(400).send();
        //     }
        //     //Get user from the database
        //     const userRepository = getRepository(User);
        //     let user: User;
        //     try {
        //       user = await userRepository.findOneOrFail(id);
        //     } catch (id) {
        //       res.status(401).send();
        //     }
        //     //Check if old password matchs
        //     if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
        //       res.status(401).send();
        //       return;
        //     }
        //     //Validate de model (password lenght)
        //     user.password = newPassword;
        //     const errors = await validate(user);
        //     if (errors.length > 0) {
        //       res.status(400).send(errors);
        //       return;
        //     }
        //     //Hash the new password and save
        //     user.hashPassword();
        //     userRepository.save(user);
        //     res.status(204).send();
        //   };
    }
}
exports.default = AuthController;
