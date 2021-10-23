import joi from "joi";
import connection from "../database/database.js";

const signUpSchema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
});

const emailAlrearyExist = async (email) => {
    const result = await connection.query(`
        SELECT * FROM users WHERE users.email = $1
    `, [email]);
    
    if(result.rowCount === 0) return false;
    else return true;
};

export { 
    signUpSchema,
    emailAlrearyExist
};
