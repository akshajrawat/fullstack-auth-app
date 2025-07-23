// basic imports
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../Model/userModel");
const tokenGenerator = require("../Util/tokenGenerator");
const Log = require("../Model/logModel");

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
  const token = tokenGenerator({
    id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    role: newUser.role,
  });

  // Set JWT token in cookie
  res.cookie("token", token, {
    httpOnly: true, // prevent access from JavaScript (secure)
    secure: process.env.NODE_ENV === "production", // send only on HTTPS in prod
    sameSite: "strict", // CSRF protection
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  // logs
  await Log.create({
    user: newUser._id,
    date: Date.now(),
    message: "You just registered",
    ipAddress: req.ip,
    userAgent: req.get("User-Agent"),
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

// messages
const funnyLoginMessages = [
  "🔓 Welcome back, you sneaky genius!",
  "🚀 Logged in! Your mission begins now.",
  "🕵️‍♂️ Access granted. Don't break anything.",
  "💻 You again? The keyboard missed you.",
  "🎉 Login successful! Now pretend to be productive.",
  "🍕 You logged in faster than I could order pizza!",
  "🧠 System says you're too smart to be real.",
  "🤖 Authenticated. Robots would be jealous.",
  "🪄 Welcome, wizard. Your magic password worked.",
  "🐱‍👓 You're in! The nerd gods approve.",
];

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
  const token = tokenGenerator({
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  });

  // Set JWT token in cookie
  res.cookie("token", token, {
    httpOnly: true, // prevent access from JavaScript (secure)
    secure: process.env.NODE_ENV === "production", // send only on HTTPS in prod
    sameSite: "strict", // CSRF protection
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  // update log
  const randomMsg =
    funnyLoginMessages[Math.floor(Math.random() * funnyLoginMessages.length)];

  await Log.create({
    user: user._id,
    date: Date.now(),
    message: randomMsg,
    ipAddress: req.ip,
    userAgent: req.get("User-Agent"),
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
