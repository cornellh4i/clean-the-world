import express from "express";
import bodyParser from "body-parser";
import userRouter from "./users/views";
import customerRouter from "./customers/views";
import swaggerUI from "swagger-ui-express";
import spec from "../api-spec.json";
import { dbConnect } from "./database";
import createUser from "./functions"

const app = express();

// Middleware to parse json request bodies
app.use(bodyParser.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(spec));

/**
 * Sub-routers for our main router, we should have one sub-router per "entity" in the application
 */
app.use("/users", userRouter);
app.use("/customers", customerRouter);

/**
 * Some dummy routes to illustrate express syntax
 */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send(req.body);
});

/**
 * Route for creating new user with phone number
 */
app.get("/create/:number", (req,res) => {
  createUser(req.params.number);
  res.send("Created new user with number " + req.params.number);
})

/**
 * Create your route here!
 */

app.listen(process.env.PORT || 3000, async () => {
  console.log("✅ Server is up and running");
  await dbConnect();
});
