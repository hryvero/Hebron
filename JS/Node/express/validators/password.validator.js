const Joi = require("joi");
const { constants } = require("../constants");

const PasswordSchema = Joi.object({
  newPassword: Joi.string().required().regex(constants.PASSWORD_REGEXP),
});

module.exports = {
  PasswordSchema,
};
