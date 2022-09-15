const http = require("http");
const multer = require("multer");
const express = require("express");
const fs = require("fs");

const app = express();

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "images/");
  },
  filename: (req, res, cb) => {
    cb(null, `newimage-${Math.random()}.jpg`);
  },
});

const upload = multer({
  storage: storage,
});

// const nef = (req, res) => {
//   res.end("welcome hhtp server");
// };

app.post("/upload", upload.single("newimage"), (req, res) => {
  const img = req.file.path;
  res.end("img", img);
});

// const server = http.createServer();
app.listen(8006, (req, res) => {
  console.log("Running at http://localhost:8006");
});
