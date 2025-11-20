//Initializing the model Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating the products model Schema
const productSchema = new Schema ({
    id: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true, 
    },
    brand: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true
    }
});

//Package and export the model
const Product = mongoose.model("Product", productSchema);
module.exports = Product;