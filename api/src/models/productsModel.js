const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    nameProduct: { type: String, required: true},
    imageProduct: { type: String, required: true},
    priceProduct: { type: Number, required: true },
    isAvailable: { type: Boolean, required: true },
    isFeatured: { type: Boolean, required: true }
});


const product = mongoose.model("product", productSchema);

module.exports = product;
