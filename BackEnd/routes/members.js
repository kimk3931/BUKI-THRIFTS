const express = require("express");
const router = express.Router();
const Member = require("../Schema/members");

// Home page route.
router.post("/login", async function (req, res) {
  try {
    const member = await Member.findOne({ email: req.body.email });
    if (!member) {
      return res.status(403).json({ message: "Invalid email " });
    }

    if (member.password !== req.body.password) {
      return res.status(403).json({ message: "Invalid Password" });
    } else {
      return res.status(200).json({ message: "Login successful", member });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// About page route.
router.post("/signup", function (req, res) {
  Member.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then((document) => {
      res.status(200).json({ message: "User created Successfully" });
      console.log(`User created successfully : ${document}`);
    })
    .catch((err) => console.error(err));
});

module.exports = router;
