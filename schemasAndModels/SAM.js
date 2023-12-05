const mongoose = require("mongoose")

const fileSchema = mongoose.Schema({
    name: String,
    filePath: String,
    size: Number
})

const fileModel = mongoose.model("fileModel", fileSchema)

module.exports = fileModel