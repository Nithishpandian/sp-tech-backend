const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/adminModel");

// @desc    post register admin
// @route   POST /api/admin/register
// @access  public
const registerAdmin = async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    res.status(400);
    throw new Error("Please add all the fields");
  }

  // Hashing password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Creating User
  const user = await Admin.create({
    userName,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      userName: user.userName,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};

// @desc    post login admin
// @route   POST /api/admin/login
// @access  public
const loginAdmin = async (req, res) => {
  const { userName, password } = req.body;
  const user = await Admin.findOne({ userName });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      _id: user.id,
      userName: user.userName,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    console.log("Invalid data");
  }
};

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerAdmin,
  loginAdmin,
};
