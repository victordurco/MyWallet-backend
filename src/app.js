import express from "express";
import cors from "cors";

import * as userController from "./controllers/userController.js";
import * as registerController from "./controllers/registerController.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/sign-up", userController.registerUser);

app.post("/sign-in", userController.loginUser);

app.post("/registers", registerController.postNewRegister);

app.get("/registers", registerController.getUserRegisters);

app.post("/sign-out", userController.logoutUser);


export default app;
