const express = require("express");
const { authRouter } = require("./auth.router");
const { userRouter } = require("./user.Rooter");
const rootRouter = express.Router();
rootRouter.use("/users", userRouter);
rootRouter.use("/auth", authRouter);
module.exports = {
  rootRouter,
};
