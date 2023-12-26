const express = require("express")
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/db")

const app = express()
app.use(cors())
app.use(express.json())
connectDB()

app.use('/image', express.static('images'));


// Routes
app.use("/api/admin", require("./routes/adminRoutes"))
app.use("/api/product", require("./routes/productRoutes"))


app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
