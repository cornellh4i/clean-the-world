// use Controllers here, just as we did in ../users/controllers.ts

import { Router } from "express";
import createUser from "./firebase-functions"

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("Hello from a subrouter");
});

userRouter.post("/", (req, res) => {
  res.send(req.body);
});

/**
 * Route for creating new user with phone number
 */
userRouter.get("/create/:number", (req,res) => {
  createUser(req.params.number);
  res.send("Created new user with number " + req.params.number);
})

export default userRouter;
