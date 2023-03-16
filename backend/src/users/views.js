"use strict";
// use Controllers here, just as we did in ../users/controllers.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const firebase_functions_1 = require("./firebase-functions");
// import checkClaim from "./firebase-functions"
const userRouter = (0, express_1.Router)();
userRouter.get("/", (req, res) => {
    res.send("Hello from a subrouter");
});
userRouter.post("/", (req, res) => {
    res.send(req.body);
});
/**
 * Route for creating new user with phone number
 */
userRouter.get("/create/:number", (req, res) => {
    (0, firebase_functions_1.createUser)(req.params.number);
    res.send("Created new user with number " + req.params.number);
});
/**
 * Route for checking whether user has a dataEntry claim
 */
userRouter.get("/check/:uid", (req, res) => {
    (0, firebase_functions_1.checkClaim)(req.params.uid);
    res.send("Data entry claim status of user " + req.params.uid + " printed to console.");
});
exports.default = userRouter;
