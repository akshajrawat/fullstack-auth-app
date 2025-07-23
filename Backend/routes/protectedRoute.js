// basic imports
const express = require("express");
const { getUser, logoutUser } = require("../controller/protectedController");
const tokenHandler = require("../Middleware/tokenHandler");

// setting up router
const router = express.Router();

// Calls to controller

// Path :- /app/user
router.get("/user", tokenHandler, getUser);

// Path :- /app/logout
router.post("/logout", tokenHandler, logoutUser);

// exports
module.exports = router;
