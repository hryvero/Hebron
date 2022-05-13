const { User } = require("../dataBase/index");
const ApiError = require("../errors/ApiError");
const {
  userValidator,
  UserSchemaUpdateValidator,
  queryValidator,
} = require("../validators");
const { userError, statusCode } = require("../constants");

const checkIsEmailDuplicate = async (req, res, next) => {
  try {
    const { email = " " } = req.body;

    if (!email) {
      throw new ApiError(userError.notFound, statusCode.notFoundStatus);
    }

    const isUserPresent = await User.findOne({
      email: email.toLowerCase().trim(),
    });

    if (isUserPresent) {
      throw new ApiError(userError.duplicateEmail, statusCode.badRequestStatus);
    }

    next();
  } catch (e) {
    next(e);
  }
};

const checkAgeValid = (req, res, next) => {
  try {
    const { age } = req.params;
    if (age >= 99 && age < 10) {
      throw new ApiError(userError.notFound, statusCode.notValidStatus);
    }
    next();
  } catch (e) {
    next(e);
  }
};
const checkIdisValid = (req, res, next) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      throw new ApiError(userError.notValidId, statusCode.notValidStatus);
    }
    next();
  } catch (e) {
    next(e);
  }
};

const checkGender = (req, res, next) => {
  try {
    const { gender } = req.params;
    if (!gender == "man" && !gender == "woman" && !gender == "they") {
      throw new ApiError(userError.notFound, statusCode.notFoundStatus);
    }
    next();
  } catch (e) {
    next(e);
  }
};

const newUserValidator = (req, res, next) => {
  try {
    const { error, value } = userValidator.newUserJoiSchema.validate(req.body);

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

const updateUserValidator = (res, req, next) => {
  try {
    const { value, error } = UserSchemaUpdateValidator.UpdateSheme.validate(
      req.body
    );

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

const validateUserQuery = (req, res, next) => {
  try {
    const { error } = queryValidator.querySchemaValidator.validate(req.query);

    if (error) {
      next(new ApiError(error.details[0].message, 400));
      return;
    }

    next();
  } catch (e) {
    next(e);
  }
};
module.exports = {
  checkIsEmailDuplicate,
  checkAgeValid,
  checkIdisValid,
  checkGender,
  newUserValidator,
  updateUserValidator,
  validateUserQuery,
};
