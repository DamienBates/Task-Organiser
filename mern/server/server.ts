import TasksModel from "./model"

const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 5000;
const URI = "mongodb+srv://damokevo:valorantstab32@mernapp1.4rgj6.mongodb.net/MERNapp1?retryWrites=true&w=majority";
const features = { useNewUrlParser: true, useUnifiedTopology: true }

app.use(bodyParser.json());
app.use(cors());
app.listen(PORT);

// Confirm we have a good connection
mongoose.connect(URI, features, (error: any) => {
    console.log(`Successfully connected to MongoDB database on port ${PORT}`)
    if (error) throw error;
});

// Routes:
// All Tasks
app.route('/').get((req: any, res: any) => {
    TasksModel.find(function (err: any, tasks: any) {
        if (err) {
            console.error(err)
        } else {
            res.json(tasks);
        }
    })
})

// CRUD:
// Create
app.route('/create-task').post((req: any, res: any) => {
    TasksModel.create(req.body, (err: any, tasks: any) => {
        if (err) {
            console.error(err)
        } else {
            console.log(tasks)
            res.json(tasks)
        }
    })
})

// Read
app.route('/add-task/:id').get((req: any, res: any) => {
    var id = req.params.id;
    TasksModel.findById(id, (err: any, tasks: any) => {
        if (err) {
            console.error(err)
        } else {
            res.json(tasks);
        }
    });
});

// Update
app.route('/edit-task/:id').post((req: any, res: any) => {
    var id = req.params.id;

    TasksModel.findById(id, { $set: req.body }, (err: any, task: any) => {
        if (!task) res.status(404).send(err, "Task not found");
        else res.json(task);
    })
});

// Delete
app.route('/delete-task/:id').delete((req: any, res: any) => {
    var id = req.params._id;

    TasksModel.findByIdAndRemove(id, (err: any, task: any) => {
        if (err) res.status(404).send(err, "Task not found")
        else res.status(200).json({ msg: task });
    })
});

module.exports = app;


