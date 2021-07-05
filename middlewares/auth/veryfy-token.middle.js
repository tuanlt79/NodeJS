// kiem tra người dùng đã login chưa
const jwt = require("jsonwebtoken");
const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    const secretKey = "TuanLT";
    const decode = jwt.verify(token, secretKey);
    req.user = decode;
    next();
    // res.send({ decode });
  } catch (error) {
    res.status(401).send("Ban chua login");
  }
};
const authorize = (arrRole) => (req, res, next) => {
  const { user } = req;
  if (arrRole.findIndex((role) => user.role === role) > -1) {
    next();
  } else {
    res.status(403).send("Ban khong co quyen");
  }
};
module.exports = { authenticate, authorize };
