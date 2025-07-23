// basic imports
const asyncHandler = require("express-async-handler");
const User = require("../Model/userModel");
const Log = require("../Model/logModel");

// controllers

// get current User and logs from database
// Path :- /app/user
// @ACCESS :- PRIVATE
const getUser = asyncHandler(async (req, res) => {
  // get user from req
  const user = req.user;

  // check whether the user exist or not
  if (!user) {
    res.status(404);
    throw new Error("No user found");
  }

  // get user and logs of the user
  const logs = await Log.find({ user: user.id });

  if (!logs) {
    res.status(404);
    throw new Error("No logs found");
  }
  res.status(200).json({ message: "Verified", user, logs });
});

// logout user
// Path :- /app/logout
// @ACCESS :- PRIVATE
const logoutUser = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  res.status(200).json({ message: "Logout successful" });
};

module.exports = {
  getUser,
  logoutUser,
};
