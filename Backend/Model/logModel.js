// imports
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const logModel = new Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },

  ipAddress: {
    type: String,
  },

  userAgent: {
    type: String,
  },
});

const Log = model("Log", logModel);

module.exports = Log;
