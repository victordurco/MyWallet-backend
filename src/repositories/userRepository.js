import connection from "../database/database.js";

const getUserByEmail = async (email) => {
    const result = await connection.query(
        `
        SELECT * FROM users WHERE users.email = $1
    `,
        [email]
    );

    if (result.rowCount === 0) return false;
    else return result.rows[0];
};

const createUser = async ({ name, email, passwordHash }) => {
    return await connection.query(
        `
            INSERT INTO users
            (name, email, password)
            VALUES ($1, $2, $3)
        `,
        [name, email, passwordHash]
    );
};

const createSession = async ({ id, token }) => {
    return await connection.query(
        `
        INSERT INTO sessions ("userId", token)
        VALUES ($1, $2)
        `,
        [id, token]
    );
};

const deleteSession = async (token) => {
    return await connection.query(
        `
        DELETE FROM sessions
            WHERE sessions.token = $1
        `,
        [token]
    );
};

const getUserByToken = async (token) => {
    const result = await connection.query(
        `
            SELECT * FROM sessions
            JOIN users
            ON sessions."userId" = users.id
            WHERE sessions.token = $1
            `,
        [token]
    );
    if (result.rowCount === 0) return false;
    else return result.rows[0];
};

export {
    getUserByEmail,
    getUserByToken,
    createUser,
    createSession,
    deleteSession,
};
