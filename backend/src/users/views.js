"use strict";
// use Controllers here, just as we did in ../users/controllers.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
userRouter.get("/", (req, res) => {
    res.send("Hello from a subrouter");
});
userRouter.post("/", (req, res) => {
    res.send(req.body);
});
exports.default = userRouter;
