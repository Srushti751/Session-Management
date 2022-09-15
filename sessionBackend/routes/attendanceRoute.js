const express = require("express");
const attendanceModel = require("../models/Attendance");
const router = express.Router();

// add attendance data
router.post("/attendancedata", async (req, res) => {
  const { session_id, members } = req.body;
  const attendance = new attendanceModel({ session_id, members });
  try {
    const saveddata = await attendance.save();
    res.status(200).send(saveddata);
  } catch (error) {
    res.status(500).send(error);
  }
});

// get attendance data
router.get("/attendancedata/sessionid/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await attendanceModel
      .find({ session_id: id })
      .populate(["session_id", "members"]);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

//update attendance data
router.post("/update-attendance/:id", async (req, res) => {
  const filter = { session_id: req.params.id };
  const condition = { members: req.body.members };
  try {
    await attendanceModel.updateMany(filter, { $push: condition });
    // await attendanceModel.updateMany(filter, condition);
    res.send("Attendance Updated");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
