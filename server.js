const express = require("express")
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/db")

const app = express()
app.use(cors())
connectDB()

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({ extended: false, limit: '50mb' }))


// Routes
app.use("/api/admin", require("./routes/adminRoutes"))
app.use("/api/product", require("./routes/productRoutes"))
app.use("/api/contact", require("./routes/contactRoutes"))


app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
