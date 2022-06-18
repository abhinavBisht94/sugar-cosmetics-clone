const { Router } = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const createError = require("http-errors");

const User = require("../../models/User.model");

const userRouter = Router();

userRouter.get("/", async (req, res, next) => {
  try {
    const cookie = req.cookies["jwt"];
    const data = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET);

    if (!data) {
      createError.BadRequest();
    }

    const userData = await User.findOne({ _id: data._id });

    const user = await userData.toJSON();

    return res.send(user);
  } catch (error) {
    next(error);
  }
});

userRouter.post("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });

  res.send({
    message: "success",
  });
});

module.exports = userRouter;
