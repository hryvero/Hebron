const { Router } = require("express");

const { userController } = require("../controllers/index");
const { userMiddleware } = require("../middlewares/index");

const userRouter = Router();

userRouter.get("/", userController.getAllUser);
userRouter.get(
  "/:userIndex",
  userMiddleware.checkIdisValid,
  userController.getUserById
);
userRouter.put(
  "/:userIndex",
  userMiddleware.newUserValidator,
  userMiddleware.checkIdisValid,
  userMiddleware.checkGender,
  userController.updateUser
);

userRouter.post(
  "/:userIndex",
  userMiddleware.newUserValidator,
  userMiddleware.checkIdisValid,
  userMiddleware.checkGender,
  userMiddleware.checkIsEmailDuplicate,
  userMiddleware.checkAgeValid,
  userController.createUser
);
userRouter.post(
  "/",
  userMiddleware.newUserValidator,
  userMiddleware.checkIsEmailDuplicate,
  userController.createUser
);

userRouter.delete(
  "/:userIndex",
  userMiddleware.checkIdisValid,
  userController.deleteUser
);

module.exports = userRouter;
