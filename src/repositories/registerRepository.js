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

const getRegisters = async (id) => {
    const result = await connection.query(
        `
          SELECT registers.*, "registersTypes".type AS "typeName"
          FROM registers
           JOIN "registersTypes"
              ON registers."typeId" = "registersTypes".id
          WHERE registers."userId" = $1
          ORDER BY registers.id;
         `,
        [id]
    );
    return result.rows;
};

export { createRegister, getRegisters };
