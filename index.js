var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var path = require("path");
require("dotenv").config();
const userController = require("./controllers/userController");

const connectionUrl = process.env.MONGO_URI;

mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Local Connection UNCOMMENT THE FOLLOWING FOR LOCAL CONNECTION
// mongoose.connect("mongodb://127.0.0.1:27017/preSkale", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

global.conn = mongoose.connection;

conn.once("open", (err) => {
  if (err) console.log(">>>>>>>>>>>", err);
  console.log("->DB CONNECTED");
});

router.get("/checks", (req, res) => {
  res.status(200).send("API IS LIVE BITCH!!");
});

router.post("/createUser", userController.createUser);
router.post("/updateUser", userController.updateUser);
router.post("/deleteUser", userController.deleteUser);
router.get("/getUsers", userController.getUsers);

module.exports = router;
