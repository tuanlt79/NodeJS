const { User } = require("../models");
const bcryptjs = require("bcryptjs");

const getListUser = async (req, res) => {
  try {
    const userList = await User.findAll();
    res.status(200).send(userList);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getInfoUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userDetail = await User.findByPk(id);
    res.status(200).send(userDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const addUser = async (req, res) => {
  const { name, email, password, age, phone, role } = req.body;
  try {
    // tao chuỗi ngẫu nhiên
    const salt = bcryptjs.genSaltSync(10);
    // mã hoá password
    const hashPassword = bcryptjs.hashSync(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      age,
      phone,
      role,
    });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("Xoa Thanh Cong");
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateUser = async (req, res) => {
  const { name, email, age, phone, role } = req.body;
  const { id } = req.params;
  try {
    await User.update(
      { name, email, age, phone, role },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).send("update thanh cong");
  } catch (error) {
    res.status(500).send(error);
  }
};
const upLoadImages = async(req, res) => {
  const { file,user } = req;
  const urlImage = "http://localhost:5000/" + file.path;
  try {
    const userDetail = await User.findByPk(user.id);
    userDetail.avatar = urlImage;
    await userDetail.save();
    res.send(userDetail);
  } catch (error) {
    res.status(500).send(error)
  }
  // console.log(urlImage)// nãy coi chừng anh chưa save, giờ thử lại xem
};
module.exports = {
  getListUser,
  getInfoUser,
  addUser,
  deleteUser,
  updateUser,
  upLoadImages,
};
