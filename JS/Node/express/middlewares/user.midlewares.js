const User = require("../dataBase/user.model");

const checkIsEmailDuplicate = async (req, res, next) => {
  try {
    const { email = "" } = req.body;

    if (!email) {
      throw new Error("Email is required");
    }

    const isUserPresent = await User.findOne({
      email: email.toLowerCase().trim(),
    });

    if (isUserPresent) {
      throw new Error("User with this email already present");
    }

    next();
  } catch (e) {
    res.json(e);
  }
};

const checkAgeValid = (req, res, next) => {
  try {
    if (age >= 99 && age < 10) {
      throw new Error("Your age is not valid :(");
    }
    next();
  } catch (e) {
    res.json(e);
  }
};

const checkGender = (req, res, next) => {
  try {
    switch (gender) {
      case "man":
        next();
        break;
      case "woman":
        next();
        break;
      case "they":
        next();
        break;
    }
    next();
  } catch (e) {
    res.json(e);
  }
};

module.exports = {
  checkIsEmailDuplicate,
  checkAgeValid,
  checkGender,
};
