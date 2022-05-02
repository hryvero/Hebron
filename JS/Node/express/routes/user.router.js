const { Router } = require("express");

const userController = require("../controllers/user.controller");

const userRouter = Router();

userRouter.get("/", userController.getAllUser);

userRouter.post("/", userController.createUser);

userRouter.delete("/:userIndex", userController.deleteUser);

userRouter.get("/:userIndex", userController.getUserById);

module.exports = userRouter;
