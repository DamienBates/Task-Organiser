const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    handle: {
        type: String
    },
    content: {
        type: String
    },
    date: {
        type: String
    },
});

const CommentsModel = mongoose.model("Comments", CommentsSchema)
export default CommentsModel