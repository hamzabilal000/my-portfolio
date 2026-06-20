const mongoose = require("mongoose")

let schema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    subject: String,
    message: { type: String, require: true },
    createdAt: { type: Date, default: Date.now }
})

let Contact = mongoose.model("contacts", schema)
module.exports = { Contact }
