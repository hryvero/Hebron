const { Router } = require("express");

const { authController } = require("../controllers");
const { authMiddleware, userMiddleware } = require("../middlewares");
const { actionTypesEnum } = require("../constants");

const authRouter = Router();

authRouter.post(
  "/login",
  authMiddleware.isLoginDataValid,
  userMiddleware.getUserDynamically("email"),
  authController.login
);

authRouter.post(
  "/logout",
  authMiddleware.checkAccessToken,
  authController.logout
);

authRouter.get(
  "/refresh",
  authMiddleware.checkRefreshToken,
  authController.refresh
);

authRouter.post(
  "/password/forgot",
  authMiddleware.validateEmail,
  userMiddleware.getUserDynamically("email"),
  authController.forgotPassword
);

authRouter.patch(
  "/password/set",
  authMiddleware.validatePassword,
  authMiddleware.checkActionToken(actionTypesEnum.FORGOT_PASSWORD),
  authController.setNewPassword
);

authRouter.put(
  "password/change",
  authMiddleware.validatePassword,
  authMiddleware.checkAccessToken,
  authController.changePassword
),
  (module.exports = authRouter);
