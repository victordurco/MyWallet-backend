import { signUpSchema } from "../validations/signUp.js";
import * as userService from "../services/userService.js"


const registerUser = async (req, res) => {
    const userData = req.body;
    const { name, email, password } = req.body;

    const { error } = signUpSchema.validate(userData);
    if (error) {
        return res.sendStatus(400);
    }


    try {
        const newUser = await userService.createUser({name, email, password});

        if (!newUser) {
            return res.sendStatus(409);
        }
        
        res.sendStatus(201);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
};

export { registerUser };
