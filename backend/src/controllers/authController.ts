import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import config from "../config/configJWT";
import { IUser } from "../modules/users/model";
import UserService from "../modules/users/service";
import { checkIfUnencryptedPasswordIsValid } from "../utils/utils";
import * as bcrypt from "bcryptjs";
class AuthController {

    private userService: UserService = new UserService();

    public login = async (req: Request, res: Response) => {
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

        this.userService.filterUser(query, (err: any, user_data: IUser) => {
            if (err) {
                res.status(500).json({
                    message: 'Lỗi hệ thống'
                });
            } else {
                if (user_data) {
                    // Check if encrypted password match
                    const isValidPassword = checkIfUnencryptedPasswordIsValid(password, user_data.password);
                    if (isValidPassword) {
                        //Sing JWT, valid for 1 hour
                        const token = jwt.sign({ _id: user_data._id, email: user_data.email }, config.jwtSecret, { expiresIn: "1h" });
                        //Send the jwt in the response
                        res.status(200).json({
                            message: 'Đăng nhập thành công',
                            data: {
                                token: token, 
                                email: user_data.email
                            }
                        });
                    } else {
                        res.status(400).json({
                            message: 'Tài khoản và mật khẩu không đúng',
                            data: {}
                        });
                    }

                } else {
                    res.status(400).json({
                        message: 'Tài khoản và mật khẩu không đúng',
                        data: {}
                    });
                }
            }
        });
    };

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
export default AuthController;