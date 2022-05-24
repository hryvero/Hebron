const { authService, emailService } = require("../services");
const { emailActionsEnum } = require("../constants");
const { OAuth } = require("../dataBase/index");

module.exports = {
  login: async (req, res, next) => {
    try {
      const {
        user,
        body: { password },
      } = req;

      await emailService.sendMail(
        "grigorivveronika@gmail.com",
        emailActionsEnum.WELCOME
      );

      await authService.comparePasswords(user.password, password);

      const tokenPair = authService.generateTokenPair({ userId: user._id });

      await OAuth.create({ user_id: user._id, ...tokenPair });

      res.json({
        ...tokenPair,
        user,
      });
    } catch (e) {
      next(e);
    }
  },

  logout: async (req, res, next) => {
    try {
      await OAuth.deleteMany({ user_id: req.authUser._id });

      res.json("ok");
    } catch (e) {
      next(e);
    }
  },

  refresh: async (req, res, next) => {
    try {
      const refresh_token = req.get("Autorization");
      await OAuth.deleteOne({ refresh_token });

      const tokenPair = authService.generateTokenPair({ userId: user._id });

      await OAuth.create({ user_id: user._id, ...tokenPair });

      res.json({
        ...tokenPair,
        user,
      });
    } catch (e) {
      next(e);
    }
  },
};
