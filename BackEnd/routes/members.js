const express = require('express');
const router = express.Router()

// Home page route.
router.get("/", function (req, res) {
  res.json({
    message : "Success one"
  })
});

// About page route.
router.get("/about", function (req, res) {
  res.json({
    message: "Success two",
  });
});

module.exports = router;