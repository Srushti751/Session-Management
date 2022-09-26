const express = require("express");
const employeeModel = require("../models/Employee");
const router = express.Router();
const generateToken = require("../utils/generateToken");
const upload = require("../utils/multerfunc");

router.post("/employeedata", async (req, res) => {
  const data = req.body;
  const employee = new employeeModel(data);
  try {
    const saveddata = await employee.save();
    res.status(200).send(saveddata);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/employeedata/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await employeeModel.find({ _id: id });
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.post("/register", async (req, res) => {
  const { name, empid, password, location, contact } = req.body;
  const loc = location.toLowerCase();
  console.log("loc", loc);
  const userExists = await employeeModel.findOne({ empid });
  console.log("data", req.body);
  if (userExists) {
    res.json("User Exists");
    throw new Error("User already exists");
  } else {
    try {
      const saveddata = await employeeModel.create({
        name,
        empid,
        password,
        location: loc,
        contact,
      });
      // const saveddata = await newUser.save();

      res.status(200).send(saveddata);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error");
    }
  }
});

router.post("/login", async (req, res) => {
  const { empid, password } = req.body;
  console.log("req", req.body);
  try {
    const user = await employeeModel.findOne({ empid });
    // if (user) {
    if (user && (await user.matchPassword(password))) {
      console.log("inside if");
      const bool = await user.matchPassword(password);
      console.log(bool);

      const currentUser = {
        // empid: user.empid,
        isAdmin: user.isAdmin,
        // _id: user.id,
        token: generateToken(user.id, user.empid, user.location, user.name),
      };

      res.json({
        user: currentUser,
        message: "Login Success",
      });
    } else {
      res.json({
        message: "Login Failed",
      });
    }
  } catch (error) {
    res.send(error);
  }
});

//update location
router.put("/updateEmployee/:id", async (req, res) => {
  const filter = { _id: req.params.id };
  const { name, empid, contact, location } = req.body;
  const loc = location && location.toLowerCase();
  const condition = { name, empid, contact, location: loc };
  try {
    await employeeModel.findByIdAndUpdate(filter, condition);
    res.send("Employee location Updated");
  } catch (error) {
    console.log(error);
  }
});

//upload image
router.put(
  "/updateProfile",
  upload.single("profileImage"),
  async (req, res) => {
    const profileImage = req.file.path;
    const id = req.query.id;

    try {
      const data = await employeeModel.findByIdAndUpdate(
        { _id: id },
        {
          profileImg: profileImage,
        }
      );
      res.send("Image Updated");
    } catch (error) {
      console.log(error);
    }
  }
);

// router.post("/employeedata/search", async (req, res) => {
//   const searchterm = req.body.searchterm;

//   try {
//     const data = await employeeModel.find({
//       $match: {
//         employee_name: { $eq: searchterm },
//       },
//     });
//     res.send(data);
//   } catch (error) {}
// });

module.exports = router;
