// use Controllers here, just as we did in ../users/controllers.ts

import { Router } from "express";
import { createUser } from "./firebase-functions"
import { verifyToken } from "../utils/firebaseMiddleware"

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

/**
 * Route for checking whether user has a dataEntry claim
 */
userRouter.get("/check/:uid", verifyToken, async (req,res) => {
  res.send("Data entry claim status of user " + req.params.uid + " printed to console.")
})

export default userRouter;
