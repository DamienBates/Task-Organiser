import mongoose from 'mongoose';
const { Schema } = mongoose;


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
export default TasksModel;