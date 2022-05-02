const DBofCars = require("../dataBase/cars");

module.exports = {
  getAllCars: (req, res) => {
    res.json(DBofCars);
  },

  createCar: (req, res) => {
    DBofCars.push(req.body);

    res.json(DBofCars);
  },

  deleteCar: (req, res) => {
    const { carIndex } = req.params;
    const cars = DBofCars[carIndex];

    if (!cars) {
      res.status(404).json(`Car with id ${carIndex} not found`);
      return;
    }
    res.send(cars);
  },
};
