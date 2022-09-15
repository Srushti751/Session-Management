const express = require("express");
const connectDB = require("./config/config");
const detailsRoute = require("./routes/detailsRoute");
const attendanceRoute = require("./routes/attendanceRoute");
const employeeRoute = require("./routes/employeeRoute");
const dotenv = require("dotenv");

dotenv.config();

connectDB();
const app = express();

const PORT = 8005;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/images", express.static("images"));

app.use("/details", detailsRoute);
app.use("/employee", employeeRoute);
app.use("/attendance", attendanceRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
