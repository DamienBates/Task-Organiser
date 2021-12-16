import mongoose from 'mongoose'
import TasksModel from './model'
import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express();
const PORT = process.env.PORT || 5000;
const URI = "mongodb+srv://damokevo:DjeBKMAgYxSMXWos@mernapp1.4rgj6.mongodb.net/MERNapp1?retryWrites=true&w=majority";
export default axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        "Content-type": "application/json"
    }
});


app.use(bodyParser.json());
app.use(cors());
app.listen(PORT);

// Confirm we have a good connection
mongoose.connect(URI, (error: any) => {
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
app.route('/add-task').post((req: any, res: any) => {
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
app.route('/see-task/:id').get((req: any, res: any) => {
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
    TasksModel.findByIdAndUpdate(id, { $set: req.body }, (err: any, task: any) => {
        if (!task) {
            res.status(404).send(err, "Task not found")
        }
        else {
            res.json(task)
        }
    })
});

// Delete
app.route('/delete-task/:id').get((req: any, res: any) => {
    const id = req.params.id;
    TasksModel.findByIdAndDelete(id, (err: any, taskDeleted: any) => {
        if (err) {
            return console.error(err), res.redirect("/ReadTask")
        }
        else {
            res.status(200).json(`Task: ${taskDeleted.task} was deleted with id: ${id}`)
        }
    })
});

// app.delete('/delete-task/:id', async (req: any, res: any)=> {
//     const id = req.params.id
// })

