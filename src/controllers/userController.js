import { signUpSchema } from "../validations/signUp.js";
import { signInSchema } from "../validations/signIn.js";

import * as userService from "../services/userService.js";

const registerUser = async (req, res) => {
    const userData = req.body;
    const { name, email, password } = req.body;

    const { error } = signUpSchema.validate(userData);
    if (error) {
        return res.sendStatus(400);
    }

    try {
        const newUser = await userService.createUser({ name, email, password });

        if (!newUser) {
            return res.sendStatus(409);
        }

        res.sendStatus(201);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

const loginUser = async (req, res) => {
    const userData = req.body;
    const { email, password } = req.body;

    const { error } = signInSchema.validate(userData);
    if (error) {
        return res.sendStatus(400);
    }

    try {
        const user = await userService.findUserByEmail(email);

        if (!user) return res.sendStatus(404);
        const createdSession = await userService.autenthicateLogin({
            user,
            password,
        });
        if (createdSession) {
            return res.status(200).send(createdSession);
        }

        return res.sendStatus(401);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

const logoutUser = async (req, res) => {
    const authorization = req.headers["authorization"];
    const token = authorization?.replace("Bearer ", "");

    if (!token) return res.sendStatus(401);

    try {
        await userService.logoutUser(token);
        res.sendStatus(200);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export { registerUser, loginUser, logoutUser };
