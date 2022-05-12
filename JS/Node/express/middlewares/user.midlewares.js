const User = require("../dataBase/user.model");
const ApiError = require("../errors/ApiError");
const { userValidator } = require("../validators");

const checkIsEmailDuplicate = async (req, res, next) => {
  try {
    const { email = " " } = req.body;

    if (!email) {
      throw new ApiError("Email is required", 400);
    }

    const isUserPresent = await User.findOne({
      email: email.toLowerCase().trim(),
    });

    if (isUserPresent) {
      throw new ApiError("User with this email already present", 409);
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
      throw new ApiError("Your age is not valid :(", 406);
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
      throw new ApiError("Your id is not valid :(", 406);
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
      throw new ApiError("Gender is not found", 404);
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
module.exports = {
  checkIsEmailDuplicate,
  checkAgeValid,
  checkIdisValid,
  checkGender,
  newUserValidator,
};
