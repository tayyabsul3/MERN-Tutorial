const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String },
  price: { type: Number, required: true },
  discountPercentage: {
    type: Number,
    min: [0, "Cannot be Negative"],
    max: [100, "Cannot be 100% discount"],
  },
  rating: {
    type: Number,
    min: [0, "Cannot be Negative"],
    max: [5, "Cannot be more than 5 "],
  },
  stock: { type: Number, required: false },
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
});

exports.Product = mongoose.model("Product", productSchema);
