// imports
const jwt = require("jsonwebtoken");

// tokengenerator
const tokenGenerator = ({ id, name, email, role }) => {
  const token = jwt.sign(
    {
      id,
      name,
      email,
      role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );

  return token;
};

module.exports = tokenGenerator;
