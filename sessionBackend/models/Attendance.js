const mongoose = require("mongoose");

const attendanceSchema = mongoose.Schema(
  {
    session_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "detail",
    },
    members: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "employee",
        },
      ],
    },
  },
  { timestamps: true }
);

const attendanceModel = mongoose.model("attendance", attendanceSchema);

module.exports = attendanceModel;
