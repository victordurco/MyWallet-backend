import connection from "../database/database.js";

const checkIfEmailExists = async (email) => {
    const result = await connection.query(`
        SELECT * FROM users WHERE users.email = $1
    `, [email]);
    
    if(result.rowCount === 0) return false;
    else return true;
};

const createUser = async ({name, email, passwordHash}) => {
    return (await connection.query(
        `
            INSERT INTO users
            (name, email, password)
            VALUES ($1, $2, $3)
        `,
        [name, email, passwordHash]
    ));
};

export {
    checkIfEmailExists,
    createUser
};