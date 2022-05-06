const { Router } = require("express");

const userController = require("../controllers/user.controller");
const userMiddlewares = require("../middlewares/user.midlewares");

const userRouter = Router();

userRouter.get("/", userController.getAllUser);

userRouter.post(
  "/",
  userMiddlewares.checkIsEmailDuplicate,
  userMiddlewares.checkAgeValid,
  userController.createUser
);

userRouter.delete("/:userIndex", userController.deleteUser);

userRouter.get("/:userIndex", userController.getUserById);

module.exports = userRouter;
