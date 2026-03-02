const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: String,
  totalPrice: Number,
  status: String,
});

module.exports = mongoose.model("Order", orderSchema);

