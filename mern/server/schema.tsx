export { }
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Comments = new Schema({
    _handle: {
        type: String
    },
    _content: {
        type: String
    },
    _added: {
        type: Boolean
    },
});

module.exports = mongoose.model("Comments", Comments)