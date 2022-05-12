const Joi = require("joi");

// const { constants } = require("../constants");

const userCarSubSchema = Joi.object({
  model: Joi.string().required(),
  year: Joi.number().integer(),
});

module.exports = {
  userCarSubSchema,
};
