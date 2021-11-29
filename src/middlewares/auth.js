import * as userService from "../services/userService.js";

const auth = async (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization?.split("Bearer ")[1];

    const session = await userService.getSessionByToken(token);

    if (!session) {
        return res.sendStatus(401);
    }

    next();
};

export default auth;
