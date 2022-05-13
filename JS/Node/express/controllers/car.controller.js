const { carModel } = require("../dataBase/index");

module.exports = {
  getAllCars: async (req, res, next) => {
    try {
      const { limit = 20, page = 1 } = req.query;
      const skip = (page - 1) * limit;
      const cars = await carModel.find().limit(limit).skip(skip);
      const count = await carModel.count({});

      res.json({
        page,
        perPage: limit,
        count,
        data: cars,
      });
    } catch (e) {
      next(e);
    }
  },

  createCar: async (req, res, next) => {
    try {
      const createCar = await carModel.create(req.body);

      res.json(createCar);
    } catch (e) {
      next(e);
    }
  },

  deleteCar: async (req, res, next) => {
    try {
      const { carIndex } = req.params;

      const deleteCar = await carModel.deleteOne({ _id: carIndex });
      res.json(deleteCar);
    } catch (e) {
      next(e);
    }
  },
};
