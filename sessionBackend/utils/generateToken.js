const jwt = require("jsonwebtoken");

const generateToken = (id, empid, location, name) => {
  return jwt.sign({ id, empid, location, name }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
