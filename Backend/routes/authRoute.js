// basic imports
const express = require("express");
const { registerUser, loginUser } = require("../controller/authController");

// setting up router
const router = express.Router();

// Calls to controller

// Path :- /auth/registers
router.post("/register", registerUser);

// Path :- /auth/login
router.get("/login", loginUser);

// exports
module.exports = router;
