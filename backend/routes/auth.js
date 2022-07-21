const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/", (req, res) => {
  console.log(req.body);
  const user = User(req.body);
  user.save();
  res.send("Hello World!");
});
module.exports = router;