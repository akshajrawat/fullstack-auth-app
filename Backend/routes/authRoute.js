// basic imports
const express = require("express");
const { registerUser } = require("../controller/authController");

// setting up router
const router = express.Router();

// Calls to controller

// Path :- /auth/registers
router.post("/register", registerUser);

// exports
module.exports = router;
