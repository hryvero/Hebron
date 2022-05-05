const User = require("../dataBase/user.model");

module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.find();
    res.json(users);
  },

  createUser: async (req, res) => {
    const createdUser = await User.create(req.body);

    res.status(201).json(createdUser);
  },

  getUserById: async (req, res) => {
    const { userIndex } = req.params;
    const user = await User.findById(userIndex);

    if (!user) {
      res.status(404).json(`User with id ${userIndex} not not found`);
      return;
    }
    res.json(user);
  },

  deleteUser: (req, res) => {
    const { userIndex } = req.params;
    const users = User[userIndex];

    if (!users) {
      res.status(404).json(`User with id ${userIndex} not found`);
      return;
    }

    res.send(users);
  },
};
