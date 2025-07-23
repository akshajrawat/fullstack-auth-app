// import
const jwt = require("jsonwebtoken");
const User = require("../Model/userModel");

// token checker
const tokenHandler = async (req, res, next) => {
  // get token from req
  const token = req.cookies.token;

  //   check whether token exist or not
  if (!token) {
    return res.status(401).json({ message: "User is not authenticated" });
  }

  //   decode userpayload from the token
  try {
    const decodedUser = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decodedUser.id);
    req.user = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

module.exports = tokenHandler;
