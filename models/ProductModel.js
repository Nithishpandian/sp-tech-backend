const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productImage: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    productDescription: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Product", productSchema)