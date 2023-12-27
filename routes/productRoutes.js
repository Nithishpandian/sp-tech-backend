const express = require("express")
const router = express.Router()
const { getProduct, setProduct, deleteProduct } = require("../controllers/productControllers")

const { protect } = require("../middlewares/authMiddleware")

router.get("/getproducts", getProduct)
router.post("/", setProduct)
router.post("/deleteproduct", deleteProduct)

module.exports = router