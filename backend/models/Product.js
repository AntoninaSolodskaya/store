const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, min: 6, max: 12000, required: true },
  description: [
    {
      item: String,
      characters: String
    }
  ]
});

module.exports = mongoose.model("Product", productSchema);
