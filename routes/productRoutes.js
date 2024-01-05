const express = require("express")
const router = express.Router()
const { getProduct, getSelectedProduct, setProduct, updateProduct, deleteProduct } = require("../controllers/productControllers")

const { protect } = require("../middlewares/authMiddleware")

router.get("/getproducts", getProduct)
router.get("/:id", getSelectedProduct)
router.post("/", setProduct)
router.post("/updateproduct/:id", updateProduct)
router.post("/deleteproduct", deleteProduct)

module.exports = router