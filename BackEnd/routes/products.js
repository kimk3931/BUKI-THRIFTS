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

router.post("/delete_product", function (req, res) {
  const productId = req.body.product_id;

  Products.deleteOne({ product_id: productId }) 
    .then((result) => {
      if (result.deletedCount === 1) {
        res.status(200).json({ message: "Product deleted successfully" });
        console.log(`Product deleted successfully: ${productId}`);
      } else {
        res.status(404).json({ message: "Product not found" });
        console.log(`Product not found: ${productId}`);
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error in deleting product" });
      console.error(err);
    });
});

router.get("/get_products" , function(req,res){
  Products.find({})
    .then((results) => {
      if (results.length > 0) {
        res.status(200).json({ message: "Products fetched successfully", products: results });
        console.log(`Products fetched successfully: ${results}`);
      }
      else{
        res.status(404).json({ message: "No products found" });
        console.log(`No products found`);
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error in fetching products" });
      console.error(err);
    })
})


module.exports = router;
