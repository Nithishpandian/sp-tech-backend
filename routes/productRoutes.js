const express = require("express")
const router = express.Router()
const { setProduct } = require("../controllers/productControllers")

const { protect } = require("../middlewares/authMiddleware")

router.post("/",protect, setProduct)

module.exports = router