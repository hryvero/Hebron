const Car = require("../dataBase/user.model");
const ApiError = require("../errors/ApiError");

const chekAutoIsExists = async (req, res, next) => {
  try {
    const { model = "" } = req.body;

    if (!model) {
      throw new ApiError("Model is required", 400);
    }

    next();
  } catch (e) {
    next(e);
  }
};
const chekYearIsNorm = async (req, res, next) => {
  try {
    const { year = "" } = req.body;

    if (year < 1990 && year > getFullYear()) {
      throw new ApiError("Year of auto is not aveliable", 404);
    }

    next();
  } catch (e) {
    next(e);
  }
};
const checkIdisValid = (req, res, next) => {
  try {
    const { carIndex } = req.params;

    if (!carIndex) {
      throw new ApiError("Your id is not valid :(", 406);
    }
    next();
  } catch (e) {
    next(e);
  }
};
module.exports = {
  chekAutoIsExists,
  chekYearIsNorm,
  checkIdisValid,
};
