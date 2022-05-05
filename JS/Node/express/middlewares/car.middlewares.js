const Car = require("../dataBase/user.model");

const chekAutoIsExists = async (req, res, next) => {
  try {
    const { model = "" } = req.body;

    if (!model) {
      throw new Error("Model is required");
    }

    next();
  } catch (e) {
    res.json(e);
  }
};
