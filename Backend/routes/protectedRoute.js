// basic imports
const express = require("express");
const { getUser } = require("../controller/protectedController");
const tokenHandler = require("../Middleware/tokenHandler");

// setting up router
const router = express.Router();

// Calls to controller

// Path :- /app/user
router.get("/user", tokenHandler, getUser);

// exports
module.exports = router;
