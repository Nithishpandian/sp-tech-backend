const express = require("express")
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/db")

const app = express()
app.use(cors())
app.use(express.json())
connectDB()


app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
