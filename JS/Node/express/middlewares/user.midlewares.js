const { userModel } = require("../dataBase/index");
const ApiError = require("../errors/ApiError");
const {
  userValidator,
  UserSchemaUpdateValidator,
  queryValidator,
} = require("../validators");
const { userError, statusCode } = require("../constants");
const { constants } = require("../constants");

const getUserDynamically = (
  paramName = "_id",
  where = "body",
  dataBaseField = paramName
) => {
  return async (req, res, next) => {
    try {
      const findObject = req[where];

      if (!findObject || typeof findObject !== "object") {
        next(new ApiError(userError.wrongParams));
        return;
      }

      const param = findObject[paramName];

      const user = await userModel
        .findOne({ [dataBaseField]: param })
        .select("+password");

      if (!user) {
        next(new ApiError(userError.notFoundUser, statusCode.notFoundStatus));
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
      next(new ApiError(error.details[0].message, statusCode.badRequestStatus));
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
      next(new ApiError(error.details[0].message, statusCode.badRequestStatus));
      return;
    }

    next();
  } catch (e) {
    next(e);
  }
};

const checkUserPhoto = (req, res, next) => {
  try {
    if (!req.files || !req.files.avatar) {
      next(new ApiError(userError.notFound, statusCode.badRequestStatus));
      return;
    }

    const { size, mimetype } = req.files.avatar;

    if (size > constants.IMAGE_MAX_SIZE) {
      next(
        new ApiError(`Max file sile should be 5MB`, statusCode.badRequestStatus)
      );
      return;
    }

    if (!constants.IMAGE_MIMETYPES.includes(mimetype)) {
      next(new ApiError(userError.wrongParams, statusCode.badRequestStatus));
      return;
    }

    next();
  } catch (e) {
    next(e);
  }
};
module.exports = {
  newUserValidator,
  getUserDynamically,
  updateUserValidator,
  validateUserQuery,
  checkUserPhoto,
};
