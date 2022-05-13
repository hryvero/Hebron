const { Router } = require("express");

const { carController } = require("../controllers/index");
const { carMiddleware } = require("../middlewares/index");

const carRouter = Router();

carRouter.get("/list", carMiddleware.newCarValidator, carController.getAllCars);

carRouter.post(
  "/create",
  carMiddleware.newCarValidator,
  carMiddleware.newCarValidator,
  carMiddleware.chekYearIsNorm,
  carMiddleware.chekAutoIsExists,
  carController.createCar
);
carRouter.put("/updated", carMiddleware.updateCar);

carRouter.delete(
  "/:carIndex",
  carMiddleware.checkIdisValid,
  carController.deleteCar
);

module.exports = carRouter;
