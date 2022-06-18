const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  prodEyesHeading: String,
  prodEyesBanner: String,
  Title: { type: String, required: true },
  ImageUrl: { type: String, required: true },
  Rating: { type: Number, required: true },
  Price: { type: String, required: true },
  category: { type: String, required: true },
  Currency: { type: String, enum: ["$", "₹"] },

  types: [
    {
      title: String,
      image: String,
      secondary_title: String,
    },
  ],
});

const Product = mongoose.model("product", productSchema);
console.log(Product, "index product model");

module.exports = Product;
