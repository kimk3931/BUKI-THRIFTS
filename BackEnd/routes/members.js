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
    member_type: req.body.member_type
  })
    .then((document) => {
      res.status(200).json({ message: "User created Successfully" });
      console.log(`User created successfully : ${document}`);
    })
    .catch((err) => console.error(err));
});

router.get("/get_members" , function (req , res){
Member.find({})
  .then((results) => {
    if (results.length > 0) {
      res
        .status(200)
        .json({ message: "Members fetched successfully", members: results });
      console.log(`Members fetched successfully: ${results}`);
    } else {
      res.status(404).json({ message: "No members found" });
      console.log(`No members found`);
    }
  })
  .catch((err) => {
    res.status(500).json({ message: "Error in fetching members" });
    console.error(err);
  });
})

module.exports = router;
