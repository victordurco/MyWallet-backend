import connection from "../database/database.js";
import { postRegisterSchema, valueIsValid } from "../validations/registers.js";
import * as registerService from "../services/registerService.js";

const postNewRegister = async (req, res) => {
    const entryData = req.body;
    const { value, description, type } = req.body;
    const authorization = req.headers["authorization"];
    const token = authorization?.replace("Bearer ", "");

    if (!token) return res.sendStatus(401);

    const { error } = postRegisterSchema.validate(entryData);
    if (error) return res.status(400).send(error);

    const formatedValue = registerService.formatValue(value);
    if (valueIsValid.validate({ value: formatedValue }).error)
        return res.sendStatus(400);

    try {
        const createdNewRegister = await registerService.postNewRegister({
            value,
            description,
            type,
            token,
        });
        if (createdNewRegister) {
            res.sendStatus(201);
        } else {
            res.sendStatus(401);
        }
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
};

const getUserRegisters = async (req, res) => {
    const authorization = req.headers["authorization"];
    const token = authorization?.replace("Bearer ", "");

    if (!token) return res.sendStatus(401);

    try {
        const result = await connection.query(
            `
            SELECT * FROM sessions
            JOIN users
                ON sessions."userId" = users.id
            WHERE sessions.token = $1
            `,
            [token]
        );

        const user = result.rows[0];

        if (user) {
            const registers = await connection.query(
                `
                SELECT registers.*, "registersTypes".type AS "typeName"
                 FROM registers
                 JOIN "registersTypes"
                    ON registers."typeId" = "registersTypes".id
                WHERE registers."userId" = $1
            `,
                [user.userId]
            );

            res.status(200).send(registers.rows);
        } else {
            res.sendStatus(401);
        }
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
};

export { postNewRegister, getUserRegisters };
