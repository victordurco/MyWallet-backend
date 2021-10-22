import joi from "joi";

const postRegisterSchema = joi.object({
    // typeId = 1 = "entry"
    // typeId = 2 = "exit"
    value: joi.string().required(),
    description: joi.string().min(2).required(),
    type: joi.number().integer().min(1).max(2).required()
});

const valueIsValid = joi.object({
    value: joi.string().pattern(/[0-9]{1,12}/)
});

export { 
    postRegisterSchema,
    valueIsValid
 };
