const multer = require("multer");
const upLoadImageSingle = () => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // huong dan thu muc de luu file
      cb(null, "./public/images/avatar");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  });
  const upload = multer({ storage });
  return upload.single("avatar");
};
module.exports = { upLoadImageSingle };
