import { Request, Response, NextFunction } from "express";
import { getAuth } from "firebase-admin/auth";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    console.log(req.headers)
    res.sendStatus(403);
    return;
  }

  const token = req.headers.authorization.split(" ")[1];
  getAuth()
    .verifyIdToken(token)
    .then((claims) => {
        if (claims.dataEntry === true) {
            next()
          }
      })
    .catch((err) => res.sendStatus(401));
};