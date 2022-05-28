const Joi = require("joi");

const { constants } = require("../constants");

const EmailSchema = Joi.object({
  email: Joi.string()
    .email()
    .trim()
    .lowercase()
    .required()
    .regex(constants.EMAIL_REGEXP),
});

module.exports = {
  EmailSchema,
};
