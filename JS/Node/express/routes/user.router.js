const { Router } = require("express");

const userController = require("../controllers/user.controller");
const userMiddlewares = require("../middlewares/user.midlewares");

const userRouter = Router();

userRouter.get("/", userController.getAllUser);
userRouter.get("/:userIndex", userController.getUserById);
userRouter.put("/:userIndex", userController.updateUser);

userRouter.post(
  "/",
  userMiddlewares.checkIsEmailDuplicate,
  userMiddlewares.checkAgeValid,
  userController.createUser
);

userRouter.delete("/:userIndex", userController.deleteUser);

module.exports = userRouter;
