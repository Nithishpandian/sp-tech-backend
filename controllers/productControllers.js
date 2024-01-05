const Product = require("../models/ProductModel");
const cloudinary = require("../config/cloudinary");

// @desc    get products
// @route   GET /api/product/getproducts
// @access  private
const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    get selected product
// @route   GET /api/product/:id
// @access  private
const getSelectedProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
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

// @desc    update products
// @route   POST /api/product/updateproduct/:id
// @access  private
const updateProduct = async (req, res) => {
  try {
    const { productName, productDescription } = req.body;
    const result = await cloudinary.uploader.upload(req.body.productImage, {
      folder: "uploads",
    });
    const product = await Product.findById(req.params.id);
    product.productName = productName;
    product.productDescription = productDescription;
    product.productImage = {
      public_id: result.public_id,
      url: result.secure_url,
    };
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    delete products
// @route   POST /api/product/deleteproduct
// @access  private
const deleteProduct = async (req, res) => {
  const { id } = req.body;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getProduct, getSelectedProduct, setProduct, updateProduct, deleteProduct };
