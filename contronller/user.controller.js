const { User } = require("../models");

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

const getListUser = (req, res) => {
  res.send(userList);
};
const getInfoUser = (req, res) => {
  const { id } = req.params;
  const userDetail = userList.find((user) => user.id === id);
  if (userDetail) {
    res.status(200).send(userDetail);
  } else {
    res.status(404).send("Not Found!");
  }
};
const addUser = async (req, res) => {
  const { name, email, password, age, phone, role } = req.body;
  const newUser = await User.create({
    name,
    email,
    password,
    age,
    phone,
    role,
  });
  res.status(201).send(newUser);
};
const deleteUser = (req, res) => {
  const { id } = req.params;
  const index = userList.findIndex((user) => user.id === id);
  if (index !== -1) {
    const userDelete = userList[index];
    userList.splice(index, 1);
    res.status(200).send(userDelete);
  } else {
    res.status(404).send("Not Foud");
  }
};
const updateUser = (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;
  const index = userList.findIndex((user) => user.id == id);
  if (index !== -1) {
    const user = userList[index];
    const userUpdate = { ...user, name, email };
    userList[index] = userUpdate;
    res.status(200).send(userUpdate);
  } else {
    res.status(404).send("Not Foud");
  }
};
module.exports = {
  getListUser,
  getInfoUser,
  addUser,
  deleteUser,
  updateUser,
};
