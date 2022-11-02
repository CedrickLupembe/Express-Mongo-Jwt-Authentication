const express = require("express");
const router = express.Router();

// Verify function
const verify = require("../routes/verifyToken");

router.get("/", verify, (req, res) => {
  res.json(req.user);
});

module.exports = router;
