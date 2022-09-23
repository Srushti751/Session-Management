const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const employeeSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    empid: {
      type: Number,
      unique: true,
    },
    password: {
      type: String,
    },
    contact: {
      type: Number,
    },
    location: {
      type: String,
    },
    profileImg: {
      type: String,
    },
  },
  { timestamps: true }
);

employeeSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

employeeSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const employeeModel = mongoose.model("employee", employeeSchema);

module.exports = employeeModel;
