import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import config from "../config/configJWT";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  // Get the jwt token from the head
  const token = req.headers["authorization"].replace('Bearer ', '');
  let jwtPayload;

  // Try to validate the token and get data
  try {
    jwtPayload = jwt.verify(token, config.jwtSecret);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    // If token is not valid, respond with 401 (unauthorized)
    console.log('Token is not valid');
    res.status(401).send();
    return;
  }

  const { _id, email } = jwtPayload;
  const newToken = jwt.sign({ _id: _id._id, email: email }, config.jwtSecret, {
    expiresIn: "4h"
  });
  res.setHeader("token", newToken);

  // Call the next middleware or controller
  next();
};