const multer = require("multer");
const moment = require("moment");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "files/");
  },
  filename(req, file, cb) {
    cb(
      null,
      req.body.category_name +
        "." +
        file.originalname.split(".")[file.originalname.split(".").length - 1]
    );
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = multer({
  storage: storage,
  fileFilter: fileFilter,
});
