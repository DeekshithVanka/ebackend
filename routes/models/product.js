

const mongoose = require('mongoose');

// Define product schema
const productSchema = {
  ide:{type:Number,required:true},
  name: { type: String, required: true },
  price: { type: Number, required: true },
};

// Create product model
const Product = mongoose.model("Product", productSchema,"products");

module.exports = Product;