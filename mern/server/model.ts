const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TasksSchema = new Schema({
    task: {
        type: String
    },
    comments: {
        type: String
    },
    priority: {
        type: String
    },
});

const TasksModel = mongoose.model("Tasks", TasksSchema)
export default TasksModel