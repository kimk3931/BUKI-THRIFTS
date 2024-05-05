const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    product_id: {
      required: true,
      type: Schema.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Products' , productSchema)
