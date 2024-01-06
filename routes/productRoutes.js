const express = require("express")
const router = express.Router()
const { getProduct, getSelectedProduct, setProduct, updateProduct, deleteProduct } = require("../controllers/productControllers")

const { protect } = require("../middlewares/authMiddleware")

router.get("/getproducts", getProduct)
router.get("/:id", protect, getSelectedProduct)
router.post("/", protect, setProduct)
router.post("/updateproduct/:id", protect, updateProduct)
router.post("/deleteproduct", protect, deleteProduct)

module.exports = router