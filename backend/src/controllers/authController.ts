import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import config from "../config/configJWT";
import {checkIfUnencryptedPasswordIsValid} from "../utils/utils";
import {IUser} from "../modules/users/model";
import UserService from "../modules/users/service";
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service';

class AuthController {

    private userService: UserService = new UserService();
    
    public login = async (req: Request, res: Response) => {
    //Check if username and password are set
    let { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send();
      return;
    }

    //Get user from database
    const query = {
        email: email
    };
    this.userService.filterUser(query, (err: any, user_data: IUser) => {
        if (err) {
            mongoError(err, res);
        } else {
            if (user_data) {
                //Check if encrypted password match
                if (checkIfUnencryptedPasswordIsValid(user_data.password, password)) {
                    res.status(401).send();
                    return;
                }
                //Sing JWT, valid for 1 hour
                const token = jwt.sign({_id: user_data._id,email: user_data.email},config.jwtSecret,{expiresIn: "1h"});
                //Send the jwt in the response
                successResponse('login successfull', token, res);
                
            } else {
                failureResponse('Khong tim thay user', {}, res)
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