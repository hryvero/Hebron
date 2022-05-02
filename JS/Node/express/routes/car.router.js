const { Router } = require("express");

const carController = require("../controllers/car.controller");

const carRouter = Router();

carRouter.get("/list", carController.getAllCars);

carRouter.post("/create", carController.createCar);

carRouter.delete("/:carIndex", carController.deleteCar);

module.exports = carRouter;
