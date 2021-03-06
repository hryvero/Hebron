const { authService, emailService } = require("../services");
const { emailActionsEnum, actionTypesEnum } = require("../constants");
const { userModel, OAuth, ActionToken } = require("../dataBase");
const { FRONTEND_URL } = require("../configs/config");

module.exports = {
  login: async (req, res, next) => {
    try {
      const {
        user,
        body: { password },
      } = req;

      // await emailService.sendMail(user.email, emailActionsEnum.WELCOME);

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
  changePassword: async (req, res, next) => {
    try {
      const {
        user: { _id, password },
      } = req;

      const newPassword = await authService.hashPassword(body.password);

      await userModel.updateOne({ _id: user._id }, { password: newPassword });
    } catch (e) {
      next(e);
    }
  },

  forgotPassword: async (req, res, next) => {
    try {
      const {
        user: { _id, name },
      } = req;

      const token = authService.generateActionToken({ user_id: _id });

      await ActionToken.create({
        token,
        user_id: _id,
        actionType: actionTypesEnum.FORGOT_PASSWORD,
      });

      const forgotPasswordUrl = `${FRONTEND_URL}/password/forgot?token=${token}`;
      await emailService.sendMail(
        user.email,
        emailActionsEnum.FORGOT_PASSWORD,
        { forgotPasswordUrl, userName: name }
      );

      res.json("Check your post");

      next(e);
    } catch (e) {
      next(e);
    }
  },

  setNewPassword: async (req, res, next) => {
    try {
      const { user, body } = req;

      const newPassword = await authService.hashPassword(body.password);

      await userModel.updateOne({ _id: user._id }, { password: newPassword });
      await OAuth.deleteMany({ user_id: user._id });
      await ActionToken.deleteOne({ token: body.token });

      res.json("Success");
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
