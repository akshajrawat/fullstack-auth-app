// basic import
const mongoose = require("mongoose");

// extracting schema and model from mongoose
const { Schema, model } = mongoose;

// using schema to create a usermodel
const userModel = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
    required: true,
  },
});

// using model
const User = model("User", userModel);

// export
module.exports = User;
