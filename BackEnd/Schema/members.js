const mongoose = require("mongoose");
const { Schema } = mongoose;

const memberSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    member_type: {
      type: String,
      required: true,
    },
    customerId: {
      type: String,
    },
  },
  { timestamps: true }
);

// Pre-save hook to generate customerId for customer members
memberSchema.pre("save", async function (next) {
  if (this.isModified("member_type") && this.member_type === "customer") {
    // Generate a unique customerId (you can use any logic here)
    this.customerId = generateCustomerId();
  }
  next();
});

// Example of generating a unique customerId (you can customize this)
function generateCustomerId() {
  // Logic to generate a unique ID (e.g., UUID, timestamp-based, etc.)
  // For demonstration purposes, let's use a simple timestamp-based ID
  return `CUST-${Date.now()}`;
}

module.exports = mongoose.model("Members", memberSchema);
