const { Router } = require("express");
const createError = require("http-errors");
const User = require("../../models/User.model");
const {
  authRegisterSchema,
  authLoginSchema,
} = require("../../helpers/validation");
const {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} = require("../../helpers/jwt");

const authRouter = Router();

authRouter.post("/register", async (req, res, next) => {
  console.log(req.body);
  try {
    const result = await authRegisterSchema.validateAsync(req.body);

    const ifExist = await User.findOne({ email: result.email });
    if (ifExist) throw createError.Conflict("Email already exist");

    const user = new User(result);
    const savedUser = await user.save();
    const accessToken = await signAccessToken(savedUser.id);
    const refreshToken = await signAccessToken(savedUser.id);
    return res.send({ accessToken, refreshToken, user });
  } catch (error) {
    if (error.isJoi === true) error.status = 422;
    next(error);
  }
});

authRouter.post("/login", async (req, res, next) => {
  try {
    const result = await authLoginSchema.validateAsync(req.body);
    const user = await User.findOne({ number: result.number });
    if (!user) throw createError.BadRequest();
    const accessToken = await signAccessToken(user.id);
    res.cookie("jwt", accessToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    const refreshToken = await signAccessToken(user.id);
    return res.send({ accessToken, refreshToken, user });
  } catch (error) {
    next(error);
  }
});

authRouter.post("/refresh-token", async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) throw createError.BadRequest();
    const userId = await verifyRefreshToken(refreshToken);

    const accessToken = await signAccessToken(userId.id);
    const refToken = await signAccessToken(userId.id);

    return res.send({ accessToken, refreshToken: refToken });
  } catch (error) {
    next(error);
  }
});

// authRouter.delete("/logout", async (req, res, next) => {

// }

module.exports = authRouter;
