const mongoose = require("mongoose");

const detailsSchema = mongoose.Schema(
  {
    date: {
      type: String,
      // required: true,
    },
    session_name: {
      type: String,
    },
    facilitator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "employee",
    },

    pics: {
      type: String,
    },
    video: {
      type: String,
    },
    ppt: {
      type: String,
    },
    location: {
      type: String,
    },
    members: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "employee",
        },
      ],
    },
    pageNumber: {
      type: Number,
    },
  },
  { timestamps: true }
);

const detailsModel = mongoose.model("detail", detailsSchema);

module.exports = detailsModel;
