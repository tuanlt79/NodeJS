const express = require("express");
const { sighnIn } = require("../contronller/auth.controller");
const authRouter = express.Router();
authRouter.post("/sign-in", sighnIn);
module.exports = { authRouter };
