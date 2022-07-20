const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  obj = {
    Hello: "world",
  };
  res.json(obj);
});
module.exports = router;
