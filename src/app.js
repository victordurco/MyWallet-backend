import express from "express";
import cors from "cors";

import { registerUser } from "./controllers/sign-up.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/sign-up", registerUser);

app.listen(4000); // start server
