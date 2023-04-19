"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const auth_1 = require("firebase-admin/auth");
const verifyToken = (req, res, next) => {
    if (!req.headers.authorization) {
        console.log(req.headers);
        res.sendStatus(403);
        return;
    }
    const token = req.headers.authorization.split(" ")[1];
    (0, auth_1.getAuth)()
        .verifyIdToken(token)
        .then((claims) => {
        next();
    })
        .catch((err) => res.sendStatus(401));
};
exports.verifyToken = verifyToken;
