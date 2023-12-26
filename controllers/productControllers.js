const Product = require("../models/ProductModel");

// @desc    get products
// @route   GET /api/getproducts
// @access  private
const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    post products
// @route   POST /api/products
// @access  private
const setProduct = async (req, res) => {
  try {
    const productImage = req.filename
    const { productName, productDescription } = req.body;
    const product = new Product({
      productName,
      productDescription,
      productImage
    });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getProduct, setProduct };
