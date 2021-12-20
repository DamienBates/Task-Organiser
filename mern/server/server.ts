import mongoose from 'mongoose'
import TasksModel from './model'
import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express();
const PORT = process.env.PORT || 5001;
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
app.get('/', (req: any, res: any) => {
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
app.post('/add-task', (req: any, res: any) => {
    TasksModel.create(req.body, (err: any, tasks: any) => {
        if (err) {
            console.error(err)
        } else {
            console.log(tasks)
            res.json(tasks)
        }
    })
})

// Read/Edit
app.get('/see-task/:id', (req: any, res: any) => {
    const id = req.params.id;
    TasksModel.findById(id, (err: any, task: any) => {
        if (err) {
            console.error(err)
        } else {
            res.json(task);
        }
    });
});

// Update
app.post('/edit-task/:id', (req: any, res: any) => {
    const id = req.params.id;
    const newTasks = {
        $set: {
            task: req.body.task,
            comments: req.body.comments,
            priority: req.body.priority,
        }
    }
    TasksModel.findByIdAndUpdate(id, newTasks, (err: any, task: any) => {
        if (err) {
            res.status(404).send(err, "Task not found")
        }
        else {
            res.json(task)
        }
    })
});

// Delete
app.delete('/delete-task/:id', (req: any, res: any) => {
    const id = req.params.id;
    TasksModel.findByIdAndDelete(id, (err: any) => {
        if (err) {
            return console.error(err)
        }
        else {
            res.status(200).json(`Task was deleted with id: ${id}`)
        }
    })
});

