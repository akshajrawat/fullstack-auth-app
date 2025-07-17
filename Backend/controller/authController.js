// basic imports
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../Model/userModel");
const jwt = require("jsonwebtoken");

// controllers

// Register User to database
// Path :- /auth/registers
// @ACCESS :- PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  // extracting data from request
  const { name, email, password } = req.body;

  // check if all the data is present
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  // use email to check if the user already exist or not
  const user = await User.findOne({ email }).select("-password");
  if (user) {
    res.status(400);
    throw new Error("User already exists");
  }

  // hashing of password
  const hashedPassword = await bcrypt.hash(password, 10);

  // create new User
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // creating jwt token
  const token = jwt.sign(
    {
      id: newUser._id, // unique user ID
      role: newUser.role, // optional, for access control
      email: newUser.email, // optional, if needed
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  // send response
  res.status(201).json({
    message: "User created succesfully",
    user: {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    },
    token,
  });
});

module.exports = {
  registerUser,
};
