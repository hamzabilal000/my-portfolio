require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")

const { c_router } = require("./routes/contact.route")

let app = express()

app.use(cors({
    origin: process.env.CLIENT_URL ? process.env.CLIENT_URL.split(",") : ["http://localhost:5173", "http://localhost:5174"],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/portfolio").then(() => console.log("db connected"))

app.use('/c', c_router)

let PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log("Running on port", PORT)
})
