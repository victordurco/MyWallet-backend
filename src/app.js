import express from "express";
import cors from "cors";

import auth from "./middlewares/auth.js";

import * as userController from "./controllers/userController.js";
import * as registerController from "./controllers/registerController.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/sign-up", userController.registerUser);

app.post("/sign-in", userController.loginUser);

app.post("/registers", auth, registerController.postNewRegister);

app.get("/registers", auth, registerController.getUserRegisters);

app.post("/sign-out", auth, userController.logoutUser);

app.post("/registers/delete", auth, registerController.deleteRegister);

export default app;
