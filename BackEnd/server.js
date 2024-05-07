const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const members = require("./routes/members")
const products = require("./routes/products")

const database_url =
  "mongodb+srv://stajohn697:USER@cluster01.jyubbqk.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(database_url);
const database = mongoose.connection;

database.on("error", console.error.bind(console, "MongoDB connection error:"));
database.once("open", () => {
  console.log("Connected to MongoDB");
});

const app = express();
app.use(bodyParser.json());
app.use("/api/members" , members)
app.use("/api/products" , products)
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
