import express from "express";
import cors from "cors";

import * as userController from "./controllers/userController.js";
import { postNewRegister, getUserRegisters } from "./controllers/registers.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/sign-up", userController.registerUser);

app.post("/sign-in", userController.loginUser);

app.post("/registers", postNewRegister);

app.get("/registers", getUserRegisters);

app.post("/sign-out", userController.logoutUser);

export default app;
