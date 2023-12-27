const Product = require("../models/ProductModel");
const cloudinary = require("../config/cloudinary");

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
    const { productName, productDescription } = req.body;
    const result = await cloudinary.uploader.upload(req.body.productImage, {
      folder: "uploads",
    });
    const product = new Product({
      productName,
      productDescription,
      productImage: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.body;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    console.log(deletedProduct);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getProduct, setProduct, deleteProduct };
