require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")

const { c_router } = require("./routes/contact.route")

let app = express()

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

mongoose.connect("mongodb://localhost:27017/portfolio").then(res => console.log("db connected"))

app.use('/c', c_router)

app.listen(8080, () => {
    console.log("Running")
})
