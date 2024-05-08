const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    order_id: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },

    product_id:{
        type: Schema.Types.ObjectId,
        ref: "Products",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    customer_id:{
        type: Schema.Types.ObjectId,
        ref: "Members",
        required: true,
    },
    order_date: {
        type: Date,
        default: Date.now,
    },
    order_description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", orderSchema);
