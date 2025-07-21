// basic imports
const asyncHandler = require("express-async-handler");
const User = require("../Model/userModel");
const Log = require("../Model/logModel");

// controllers

// get current User from database
// Path :- /app/user
// @ACCESS :- PRIVATE
const getUser = asyncHandler(async (req, res) => {
  const user = req.user;

  if (!user) {
    res.status(404);
    throw new Error("No user found");
  }
  res.status(200).json({ message: "Verified", user });
});

module.exports = {
  getUser,
};
