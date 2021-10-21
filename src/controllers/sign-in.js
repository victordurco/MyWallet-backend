import connection from "../database/database.js";
import bcrypt from "bcrypt";
import { signInSchema } from "../validations/signIn.js";
import { v4 as uuid } from "uuid";

const loginUser = async (req, res) => {
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

        if (user && bcrypt.compareSync(password, user.password)) {
            const token = uuid();

            await connection.query(
                `
                INSERT INTO sessions ("userId", token)
                VALUES ($1, $2)
                `,
                [user.id, token]
            );

            res.send(token);
        } else {
            res.sendStatus(404);
        }
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
};

export { loginUser };
