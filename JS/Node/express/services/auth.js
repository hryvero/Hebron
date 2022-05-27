const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const ApiError = require("../errors/ApiError");
const { authError, userError, statusCode } = require("../constants/index");
const {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  ACTION_TOKEN_SECRET,
} = require("../configs/config");
const { tokenTypeEnum } = require("../constants/index");

async function comparePasswords(hashPassword, password) {
  const isPasswordSame = await bcrypt.compare(password, hashPassword);

  if (!isPasswordSame) {
    throw new ApiError(userError.wrongPassword, statusCode.badRequestStatus);
  }
}

function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

function generateTokenPair(encodeData = {}) {
  const access_token = jwt.sign(encodeData, ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
  const refresh_token = jwt.sign(encodeData, REFRESH_TOKEN_SECRET, {
    expiresIn: "30d",
  });

  return {
    access_token,
    refresh_token,
  };
}

function generateActionToken(encodeData = {}) {
  return jwt.sign(encodeData, ACTION_TOKEN_SECRET, { expiresIn: "24h" });
}

function validateToken(token, tokenType = tokenTypeEnum.ACCESS) {
  try {
    let secretWord = ACCESS_TOKEN_SECRET;

    if (tokenType === tokenTypeEnum.REFRESH) {
      secretWord = REFRESH_TOKEN_SECRET;
    }

    return jwt.verify(token, secretWord);
  } catch (e) {
    throw new ApiError(
      e.message || authError.notValidToken,
      statusCode.notValidStatus
    );
  }
}
module.exports = {
  comparePasswords,
  hashPassword,
  generateTokenPair,
  generateActionToken,
  validateToken,
};
