const { OAuth, ActionToken } = require("../dataBase");
const ApiError = require("../errors/ApiError");
const { statusCode, authError } = require("../constants");
const { authService } = require("../services");
const { authValidator, passwordValidator } = require("../validators");

async function checkAccessToken(req, res, next) {
  try {
    const access_token = req.get("Authorization");

    if (!access_token) {
      next(new ApiError(authError.noToken, statusCode.notFoundStatus));
      return;
    }

    authService.validateToken(access_token);

    const tokenData = await OAuth.findOne({ access_token }).populate("user_id");

    if (!tokenData || !tokenData.user_id) {
      next(new ApiError(authError.notValidToken, statusCode.notFoundStatus));
      return;
    }

    req.authUser = tokenData.user_id;

    next();
  } catch (e) {
    next(e);
  }
}

function checkRefreshToken(req, res, next) {
  try {
    const token = req.get("");

    authService.validateToken(token, "refresh");

    next();
  } catch (e) {
    next(e);
  }
}

function isLoginDataValid(req, res, next) {
  try {
    const { value, error } = authValidator.loginSchema.validate(req.body);

    if (error) {
      next(new ApiError(error.details[0].message));
      return;
    }

    req.body = value;

    next();
  } catch (e) {
    next(e);
  }
}

function checkActionToken(actionType) {
  return async function (req, res, next) {
    try {
      const { token } = req.body;

      authService.validateToken(token, actionType);

      const tokenData = await ActionToken.findOne({
        token,
        actionType,
      }).populate("user_id");

      if (!tokenData || !tokenData.user_id) {
        return next(
          new ApiError(authError.notValidToken, statusCode.notFoundStatus)
        );
      }

      req.user = tokenData.user_id;
      next();
    } catch (e) {
      next(e);
    }
  };
}
function validatePassword(req, res, next) {
  try {
    const { error } = passwordValidator.PasswordSchema.validate(req.body);

    if (error) {
      next(
        new ApiError(error.details[0].message, codeStatus.bad_request_status)
      );
      return;
    }

    next();
  } catch (e) {
    next(e);
  }
}

module.exports = {
  checkAccessToken,
  checkRefreshToken,
  isLoginDataValid,
  validatePassword,
  checkActionToken,
};
