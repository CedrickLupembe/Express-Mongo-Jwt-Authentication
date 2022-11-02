const express = require("express");
const User = require("../Model/user");
const router = express.Router();

const verify = require("./verifyToken");

router.get("/", verify, async (req, res) => {
  try {
    const allStars = await User.find();
    res.status(200).json(allStars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
