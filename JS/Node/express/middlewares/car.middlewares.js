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
module.exports = {
  chekAutoIsExists,
};
