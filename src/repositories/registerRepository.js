import connection from "../database/database.js";

const createRegister = async ({
    userId,
    today,
    type,
    description,
    formatedValue,
}) => {
    return await connection.query(
        `
        INSERT INTO registers ("userId", date, "typeId", description, value)
        VALUES ($1, $2, $3, $4, $5)
      `,
        [userId, today, type, description, formatedValue]
    );
};

export { createRegister };
