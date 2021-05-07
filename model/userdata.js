const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    technology: {
        type: String,
        required:true
    },
    enrolled: {
        type: Boolean,
        require: true,
        default: false
    }
})
module.exports = mongoose.model("userdata", userSchema);