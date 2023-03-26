"use strict";
// use Controllers here, just as we did in ../users/controllers.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const firebase_functions_1 = __importDefault(require("./firebase-functions"));
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
    (0, firebase_functions_1.default)(req.params.number);
    res.send("Created new user with number " + req.params.number);
});
exports.default = userRouter;
