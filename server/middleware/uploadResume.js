const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "files/resume/");
    console.log(file.mimetype);
  },

  filename(req, file, cb) {
    cb(
      null,
      req.body.user_name +
        "." +
        req.body.user_phone +
        "." +
        file.originalname.split(".")[file.originalname.split(".").length - 1]
    );
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype ==
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    file.mimetype == "application/pdf" ||
    file.mimetype == "application/msword"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = multer({
  storage: storage,
  //   fileFilter: fileFilter,
});
