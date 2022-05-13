const { Car } = require("../dataBase/user.model");
const ApiError = require("../errors/ApiError");
const { carValidator, carUpdateValidator } = require("../validators");
const { carError, statusCode } = require("../constants");

const chekAutoIsExists = async (req, res, next) => {
  try {
    const { model = "" } = req.body;

    if (!model) {
      throw new ApiError(carError.notFoundCar, statusCode.notFoundStatus);
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
      throw new ApiError(carError.notValidId, statusCode.notValidStatus);
    }
    next();
  } catch (e) {
    next(e);
  }
};

const newCarValidator = (req, res, next) => {
  try {
    const { error, value } = carValidator.userCarSubSchema.validate(req.body);

    if (error) {
      next(new ApiError(error.details[0].message, 400));
      return;
    }

    req.body = value;

    next();
  } catch (e) {
    next(e);
  }
};

const updateCar = (res, req, next) => {
  try {
    const { value, error } =
      carUpdateValidator.carUpdateShemeValidator.validate(req.body);

    if (error) {
      next(new ApiError(error.details[0].message, statusCode.badRequestStatus));
      return;
    }

    req.body = Object.assign(req.body, value);

    next();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  chekAutoIsExists,
  checkIdisValid,
  newCarValidator,
  updateCar,
};
