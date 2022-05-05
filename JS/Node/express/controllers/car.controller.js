const Car = require("../dataBase/cars.model");

module.exports = {
  getAllCars: async (req, res) => {
    const cars = await Car.find();
    res.json(cars);
  },

  createCar: async (req, res) => {
    const createdCar = await Car.create(req.body);
    res.status(201).json(CacreatedCarr);
  },

  deleteCar: async (req, res) => {
    const { carIndex } = req.params;
    const cars = await Car.findById(carIndex);

    if (!cars) {
      res.status(404).json(`Car with id ${carIndex} not found`);
      return;
    }
    res.send(cars);
  },
};
