// basic imports
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../Model/userModel");
const tokenGenerator = require("../Util/tokenGenerator");

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
  const user = await User.findOne({ email });
  if (user) {
    res.status(409);
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
  const token = tokenGenerator(
    newUser._id,
    newUser.name,
    newUser.email,
    newUser.role
  );

  // Set JWT token in cookie
  res.cookie("token", token, {
    httpOnly: true, // prevent access from JavaScript (secure)
    secure: process.env.NODE_ENV === "production", // send only on HTTPS in prod
    sameSite: "strict", // CSRF protection
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  // send response
  res.status(201).json({
    message: "User created succesfully",
    user: {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    },
  });
});

// login User
// Path :- /auth/login
// @ACCESS :- PUBLIC
const loginUser = asyncHandler(async (req, res) => {
  // extracting data from request
  const { email, password } = req.body;

  // check if all the data is present
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  // use email to check if the user exist or not
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error("User does not exists PLease register");
  }

  // compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(401);
    throw new Error("Email or Password is incorrect");
  }

  // generate token for successfull login
  const token = tokenGenerator(user._id, user.name, user.email, user.role);

  // Set JWT token in cookie
  res.cookie("token", token, {
    httpOnly: true, // prevent access from JavaScript (secure)
    secure: process.env.NODE_ENV === "production", // send only on HTTPS in prod
    sameSite: "strict", // CSRF protection
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  // send response
  res.status(200).json({
    message: "Login Succesfull",
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

module.exports = {
  registerUser,
  loginUser,
};
