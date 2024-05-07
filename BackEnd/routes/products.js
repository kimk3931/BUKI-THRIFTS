const express = require("express");
const router = express.Router();
const Products = require("../Schema/products");


router.post("/add_product", function (req, res) {
  Products.create({
    name: req.body.name,
    size: req.body.size,
    price: req.body.price,
    description: req.body.description,
  })
    .then((document) => {
      res.status(200).json({ message: "Product added Successfully" });
      console.log(`Product added Successfully : ${document}`);
    })
    .catch((err) => {
        res.status(500).json({ message: "Error in adding product" });
        console.error(err)
    });
});

module.exports = router;
