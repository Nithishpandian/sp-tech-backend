const express = require("express")
const router = express.Router()
const { sendMail } = require("../controllers/contactControllers")

router.post("/", sendMail)

module.exports = router