const express = require("express");
const {
  getListUser,
  getInfoUser,
  updateUser,
  deleteUser,
  addUser,
} = require("../contronller/user.controller");
const userRouter = express.Router();
const userList = [
  {
    id: "1",
    name: "Trần Thị Hoa Hồng",
    email: "hong@gmail.com",
  },
  {
    id: "2",
    name: "Trần Thị Hoa Lan",
    email: "lan@gmail.com",
  },
];

/**
 * api lấy danh sách người dùng
 * method:get
 */
userRouter.get("/", getListUser);

userRouter.get("/:id", getInfoUser);
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
userRouter.delete("/:id", deleteUser);
/**
 * api update sách người dùng
 * method:post
 * url: http://localhost:4000/users/
 */
userRouter.put("/:id", updateUser);
module.exports = {
  userRouter,
};
