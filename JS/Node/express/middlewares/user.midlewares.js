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
    const { email = "" } = req.body;

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

const getUserDynamically = (
  paramName = "_id",
  where = "body",
  dataBaseField = paramName
) => {
  return async (req, res, next) => {
    try {
      const findObject = req[where];

      if (!findObject || typeof findObject !== "object") {
        next(new ApiError("Wrong search param in middleware"));
        return;
      }

      const param = findObject[paramName];

      const user = await User.findOne({ [dataBaseField]: param }).select(
        "+password"
      );

      if (!user) {
        next(new ApiError("User not found", 404));
        return;
      }

      req.user = user;

      next();
    } catch (e) {
      next(e);
    }
  };
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
  newUserValidator,
  getUserDynamically,
  updateUserValidator,
  validateUserQuery,
};
