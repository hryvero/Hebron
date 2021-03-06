const Joi = require("joi");

const { constants } = require("../constants");

const userCarSubSchema = Joi.object({
  model: Joi.string().required(),
  year: Joi.number().integer().max(constants.CURRENT_YEAR),
});

module.exports = {
  userCarSubSchema,
};
