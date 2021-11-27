import * as userRepository from "../repositories/userRepository.js";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";

const createUser = async ({ name, email, password }) => {
    if (await userRepository.getUserByEmail(email)) {
        return false;
    }

    const passwordHash = bcrypt.hashSync(password, 10);

    userRepository.createUser({ name, email, passwordHash });

    return true;
};

const findUserByEmail = async (email) => {
    const user = userRepository.getUserByEmail(email);
    return user;
};

const autenthicateLogin = async ({ user, password }) => {
    const id = user.id;
    if (bcrypt.compareSync(password, user.password)) {
        const token = uuid();
        await userRepository.createSession({ id, token });
        return {
            name: user.name,
            token: token,
        };
    } else {
        return false;
    }
};

const logoutUser = async (token) => {
    return await userRepository.deleteSession(token);
};

export { createUser, findUserByEmail, autenthicateLogin, logoutUser };
