const Joi = require("joi");

const { constants } = require("../constants");

const carUpdateShemeValidator = Joi.object({
  model: Joi.string().required().min(3).max(20),
  year: Joi.number().integer().min(2000).max(constants.CURRENT_YEAR),
});

module.exports = {
  carUpdateShemeValidator,
};
