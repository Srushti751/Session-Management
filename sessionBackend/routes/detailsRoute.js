const express = require("express");
const detailsModel = require("../models/Details");
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
router.get("/sessiondata", async (req, res) => {
  const { page = 1, limit = 10, location, searchterm } = req.query;
  const loc = location?.toLowerCase();
  console.log("location", loc);
  try {
    const data = await detailsModel
      .find({ location: loc })
      .populate(["facilitator", "members"])
      .limit(limit * 1)
      .skip((page - 1) * limit);
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

//get attendance count

module.exports = router;
