"use strict";
// use Controllers here, just as we did in ../users/controllers.ts
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
const express_1 = require("express");
const firebase_functions_1 = require("./firebase-functions");
const firebaseMiddleware_1 = require("../utils/firebaseMiddleware");
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
userRouter.get("/check/:uid", firebaseMiddleware_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Data entry claim status of user " + req.params.uid + " printed to console.");
}));
exports.default = userRouter;
