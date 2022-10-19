const express = require("express");
const userRouter = require("./user.router");
const carRouter = require("./car.router");
const chatRouter = require("./chat.router");
const reportRouter = require("./report.router");
const authRouter = require("./auth.router");
const socketRouter = require("./socket.router");
const { notFoundError } = require("../errors/error.handler");

const router = express.Router();

router.use("/auth", authRouter);
router.use("/reports", reportRouter);
router.use("/users", userRouter);
router.use("/cars", carRouter);
router.use("/chat", chatRouter);
router.use("*", notFoundError);

module.exports = {
  router,
  socketRouter,
};
