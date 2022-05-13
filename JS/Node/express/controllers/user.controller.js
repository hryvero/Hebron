const { userModel } = require("../dataBase/index");
const { authService } = require("../services/index");

module.exports = {
  getAllUser: async (req, res, next) => {
    try {
      const { limit = 20, page = 1 } = req.query;
      const skip = (page - 1) * limit;
      const users = await userModel.find().limit(limit).skip(skip);
      const count = await userModel.count({});

      res.json({
        page,
        perPage: limit,
        count,
        data: users,
      });
    } catch (e) {
      next(e);
    }
  },

  createUser: async (req, res, next) => {
    try {
      const hashPassword = await authService.hashPassword(req.body.password);
      const createUser = await userModel.create({
        ...req.body,
        password: hashPassword,
      });

      res.json(createUser);
    } catch (e) {
      next(e);
    }
  },

  getUserById: async (req, res, next) => {
    try {
      res.json(req.user);
    } catch (e) {
      next(e);
    }
  },
  updateUser: async (req, res, next) => {
    try {
      const { userId } = req.params;
      const updateUser = await userModel.updateOne(
        { _id: userId },
        { $set: req.body }
      );

      res.json(updateUser);
    } catch (e) {
      next(e);
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      const { userId } = req.params;

      const deleteUser = await User.deleteOne({ _id: userId });

      res.json(deleteUser);
    } catch (e) {
      next(e);
    }
  },
};
