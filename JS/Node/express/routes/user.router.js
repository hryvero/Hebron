const { Router } = require("express");

const userController = require("../controllers/user.controller");
const userMiddlewares = require("../middlewares/user.midlewares");

const userRouter = Router();

userRouter.get("/", userController.getAllUser);
userRouter.get(
  "/:userIndex",
  userMiddlewares.checkIdisValid,
  userController.getUserById
);
userRouter.put(
  "/:userIndex",
  userMiddlewares.checkIdisValid,
  userMiddlewares.checkGender,
  userController.updateUser
);

userRouter.post(
  "/",
  userMiddlewares.checkGender,
  userMiddlewares.checkIsEmailDuplicate,
  userMiddlewares.checkAgeValid,
  userController.createUser
);
userRouter.post(
  "/",
  userMiddlewares.newUserValidator,
  userMiddlewares.checkIsEmailDuplicate,
  userController.createUser
);

userRouter.delete(
  "/:userIndex",
  userMiddlewares.checkIdisValid,
  userController.deleteUser
);

module.exports = userRouter;
