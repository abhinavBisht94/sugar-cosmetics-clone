const Joi = require("joi");

const authRegisterSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  number: Joi.number().required().min(10),
  fName: Joi.string().required().min(3),
  lName: Joi.string().required().min(3),
});

const authLoginSchema = Joi.object({
  number: Joi.number().required().min(10),
});

module.exports = {
  authRegisterSchema,
  authLoginSchema,
};
