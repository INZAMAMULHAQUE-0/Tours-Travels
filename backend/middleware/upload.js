const multer = require('multer');
const path = require('path');

// File storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Ensure this directory exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// File filter (optional)
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname);
  if (ext === '.jpg' || ext === '.png' || ext === '.jpeg') {
    cb(null, true);
  } else {
    cb(new Error('Only images are allowed'), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;