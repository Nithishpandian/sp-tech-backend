const multer = require("multer");
let path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/");
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + path.extname(file.originalname)
    req.filename = filename
    cb(null, filename);
  },
});


const upload = multer({ storage: storage });

module.exports = {
  upload
}