const Joi = require('joi');


const registerValidation = (data) => {
const schema = {
    username: Joi.string()
    .min(6)
    .required(),
    firstname: Joi.string()
    .max(10)
    .required(),
    lastname: Joi.string()
    .max(10)
    .required(),
    email: Joi.string()
    .min(6)
    .required()
    .email(),
    password: Joi.string()
    .min(6)
    .required()
};
return Joi.validate(data, schema)
};

 
module.exports.registerValidation = registerValidation;