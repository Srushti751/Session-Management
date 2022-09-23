const jwt = require("jsonwebtoken");
const User = require("../models/Employee");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      console.log("protect wala token", token);
      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("protect wala token", decoded);
      // localStorage.setItem("token", token);
      req.user = await User.find(
        { empid: decoded.empid } || { _id: decoded.id }
      ).select("-password");
      // console.log("protect wala user",req.user)
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
