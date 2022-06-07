const { Router } = require("express");

const { userController } = require("../controllers/index");
const { userMiddleware } = require("../middlewares/index");

const userRouter = Router();

userRouter.get("/", userController.getAllUser);
userRouter.get("/:userIndex", userController.getUserById);
userRouter.put("/:userIndex", userController.updateUser);

userRouter.post(
  "/:userIndex",
  userMiddleware.newUserValidator,
  userController.createUser
);

userRouter.post(
  "/:userIndex/photo",
  userMiddleware.checkUserPhoto,
  userController.uploadUserPhoto
);

userRouter.post(
  "/",
  userMiddleware.newUserValidator,
  userController.createUser
);

userRouter.delete("/:userIndex", userController.deleteUser);

module.exports = userRouter;
