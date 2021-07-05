const { User } = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sighnIn = async (req, res) => {
  const { email, password } = req.body;
  /**
   * 2 buoc dang nhap
   * 1/ tim user theo email
   * 2/ so sanh password
   */
  try {
    const userLogin = await User.findOne({ where: { email } });
    // res.send({ userLogin });
    if (userLogin) {
      //so sanh password
      const isAuth = bcryptjs.compareSync(password, userLogin.password);
      //   res.send({ isAuth });
      if (isAuth) {
        //tao token
        const payload = {
          id: userLogin.id,
          email: userLogin.email,
          role: userLogin.role,
        };
        const secretKey = "TuanLT";
        const token = jwt.sign(payload, secretKey, { expiresIn: 24 * 60 * 60 });
        res.status(200).send({ massages: "Login thanh cong", token });
      } else {
        res.status(400).send("Sai Mat Khau");
      }
    } else {
      res.status(404).send("Email khong ton tai");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = { sighnIn };
