import connection from "../database/database.js";
import bcrypt from "bcrypt";
import { signInSchema } from "../validations/signIn.js";
import { v4 as uuid } from "uuid";

const login = async (req, res) => {
    const userData = req.body;
    const { email, password } = req.body;

    const { error } = signInSchema.validate(userData);
    if (error) {
        return res.sendStatus(400);
    }

    try {
        const result = await connection.query(
            `
                SELECT * FROM users
                WHERE email = $1
            `,
            [email]
        );

        const user = result.rows[0];

        if(!user) return res.sendStatus(404);

        if (bcrypt.compareSync(password, user.password)) {
            const token = uuid();

            await connection.query(
                `
                INSERT INTO sessions ("userId", token)
                VALUES ($1, $2)
                `,
                [user.id, token]
            );

            const userInfo = {
                name: user.name,
                token: token,
            };
            res.send(userInfo);
        } else {
            res.sendStatus(401);
        }
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
};



export { 
    login
};