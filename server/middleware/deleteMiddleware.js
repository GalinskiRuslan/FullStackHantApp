const fs = require("fs");

const deleteFile = async (path) => {
  try {
    fs.unlinkSync(path);
  } catch (error) {
    console.log(error);
  }
};

module.exports = async (req, res, next) => {};
