const { Router } = require("express");

const carController = require("../controllers/car.controller");
const carMiddleware = require("../middlewares/car.middlewares");

const carRouter = Router();

carRouter.get("/list", carController.getAllCars);

carRouter.post(
  "/create",
  carMiddleware.chekYearIsNorm,
  carMiddleware.chekAutoIsExists,
  carController.createCar
);

carRouter.delete(
  "/:carIndex",
  carMiddleware.checkIdisValid,
  carController.deleteCar
);

module.exports = carRouter;
