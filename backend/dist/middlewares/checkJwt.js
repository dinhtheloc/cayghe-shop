"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const jwt = require("jsonwebtoken");
const configJWT_1 = require("../config/configJWT");
exports.checkJwt = (req, res, next) => {
    //Get the jwt token from the head
    const token = req.headers["auth"];
    let jwtPayload;
    //Try to validate the token and get data
    try {
        jwtPayload = jwt.verify(token, configJWT_1.default.jwtSecret);
        res.locals.jwtPayload = jwtPayload;
    }
    catch (error) {
        //If token is not valid, respond with 401 (unauthorized)
        res.status(401).send();
        return;
    }
    //The token is valid for 1 hour
    //We want to send a new token on every request
    const { _id, email } = jwtPayload;
    const newToken = jwt.sign({ _id: _id._id, email: email }, configJWT_1.default.jwtSecret, {
        expiresIn: "1h"
    });
    res.setHeader("token", newToken);
    //Call the next middleware or controller
    next();
};
