const Product = require("../models/ProductModel");

// @desc    post products
// @route   POST /api/products
// @access  private
const setProduct = async (req, res) => {
  try {
    const { productImage, productName, productDescription } = req.body;
    const product = new Product({
      productImage,
      productName,
      productDescription,
    });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { setProduct };
