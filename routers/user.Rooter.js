const express = require("express");
const {
  getListUser,
  getInfoUser,
  updateUser,
  deleteUser,
  addUser,
  upLoadImages,
} = require("../contronller/user.controller");
const {
  authenticate,
  authorize,
} = require("../middlewares/auth/veryfy-token.middle");
const { logFeature } = require("../middlewares/log/log.middleware");
const { upLoadImageSingle } = require("../middlewares/upload/upload.middle");
const {
  checkExit,
} = require("../middlewares/validations/check-exit.middleware");
const userRouter = express.Router();
const { User } = require("../models/");

//upload hinh
userRouter.post(
  "/upload-image",
  authenticate,
  upLoadImageSingle(),
  upLoadImages
);
/**
 * api lấy danh sách người dùng
 * method:get
 */
userRouter.get(
  "/",
  logFeature("day la tinh nang lay danh sach nguoi dung"),
  getListUser
);

userRouter.get("/:id", checkExit(User), getInfoUser);
/**
 * api them sách người dùng
 * method:post
 * url: http://localhost:4000/users/
 */
userRouter.post("/", addUser);
/**
 * api xoá sách người dùng
 * method:post
 * url: http://localhost:4000/users/
 */
userRouter.delete(
  "/:id",
  authenticate,
  authorize(["ADMIN", "SUPPER_ADMIN"]),
  checkExit(User),
  deleteUser
);
/**
 * api update sách người dùng
 * method:post
 * url: http://localhost:4000/users/
 */
userRouter.put("/:id", checkExit(User), updateUser);

module.exports = {
  userRouter,
};
