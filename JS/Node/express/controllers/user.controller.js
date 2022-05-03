const DBofUsers = require("../dataBase/users");

module.exports = {
  getAllUser: (req, res) => {
    res.json(DBofUsers);
  },

  createUser: (req, res) => {
    DBofUsers.push(req.body);

    res.json(DBofUsers);
  },

  getUserById: (req, res) => {
    const { userIndex } = req.params;
    const user = DBofUsers[userIndex];

    if (!user) {
      res.status(404).json(`User with id ${userIndex} not not found`);
      return;
    }
    res.json(user);
  },

  deleteUser: (req, res) => {
    const { userIndex } = req.params;
    const users = DBofUsers[userIndex];

    if (!users) {
      res.status(404).json(`User with id ${userIndex} not found`);
      return;
    }

    res.send(users);
  },
};
