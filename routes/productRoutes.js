const express = require("express")
const router = express.Router()
const { getProduct, setProduct } = require("../controllers/productControllers")

const { protect } = require("../middlewares/authMiddleware")
const { upload } = require("../middlewares/imageUploadMiddleware")

router.get("/getproducts", getProduct)
router.post("/", upload.single("productImage"), setProduct)

module.exports = router