const express = require("express");
const { protect } = require("../authMiddleware/protect");
const detailsModel = require("../models/Details");
const employeeModel = require("../models/Employee");

const upload = require("../utils/multerfunc");
const router = express.Router();

router.post("/sessiondata/newdata", async (req, res) => {
  const {
    date,
    session_name,
    facilitator,
    empid,
    pics,
    video,
    ppt,
    location,
    members,
    pageNumber,
  } = req.body;
  const loc = location?.toLowerCase();
  console.log(loc);
  const details = new detailsModel({
    date,
    session_name,
    facilitator,
    empid,
    pics,
    video,
    ppt,
    location: loc,
    members,
    pageNumber,
  });
  try {
    const saveddata = await details.save();
    res.status(200).send(saveddata);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// get session details based on Location
router.get("/sessiondata", protect, async (req, res) => {
  const { page = 1, limit = 10, location, searchterm } = req.query;
  const loc = location?.toLowerCase();
  console.log("location", loc);
  try {
    const data = await detailsModel
      // .find()
      .find({ location: loc })
      .populate(["facilitator"]);
    // .limit(limit * 1)
    // .skip((page - 1) * limit);
    res.send({ total: data.length, data });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.get("/sessiondata/:id", async (req, res) => {
  // const { page = 1, limit = 10, location, searchterm } = req.query;
  const id = req.params.id;
  try {
    const data = await detailsModel
      .find({ _id: id })
      // .find({ location: loc })
      .populate(["facilitator"]);
    // .limit(limit * 1)
    // .skip((page - 1) * limit);
    res.send({ total: data.length, data });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// get session using search term
router.get("/searchsessiondata", async (req, res) => {
  const searchterm = req.query.searchterm;

  try {
    const regex = new RegExp(searchterm, "i");
    const data = await detailsModel.find(
      { session_name: regex }
      // { $text: { $search: searchterm } }
      // {
      //   $match: {
      //     session_name: `/${searchterm}/i`,
      //   },
      // },
    );
    res.send(data);
  } catch (error) {}
});

router.put("/updatePics", upload.single("profileImage"), async (req, res) => {
  const profileImage = req.file.path;
  const id = req.query.id;

  try {
    const data = await detailsModel.findByIdAndUpdate(
      { _id: id },
      {
        pics: profileImage,
      }
    );
    res.send("Image Updated");
  } catch (error) {
    console.log(error);
  }
});

//get attendance count

module.exports = router;
