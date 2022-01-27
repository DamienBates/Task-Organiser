import mongoose from 'mongoose'
import TasksModel from './model'
import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import axios from 'axios'
import dotenv from "dotenv"
dotenv.config()

//dotenv type definitions of environment variables
declare var process: {
    env: {
        MONGO_URI: string,
        PORT: string,
    }
};

const app = express();
const PORT = process.env.PORT;
const URI = process.env.MONGO_URI;

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
mongoose.connect(URI, (error) => {
    console.log(`Successfully connected to MongoDB database on port ${PORT}`)
    if (error) throw error;
});

// Routes:
// All Tasks
app.get('/', (req, res) => {
    TasksModel.find(function (err, tasks) {
        if (err) {
            console.error(err)
        } else {
            res.json(tasks);
        }
    })
})

// CRUD:
// Create
app.post('/add-task', (req, res) => {
    TasksModel.create(req.body, (err: string, tasks: string) => {
        if (err) {
            console.error(err)
        } else {
            console.log(tasks)
            res.json(tasks)
        }
    })
})

// Read/Edit
app.get('/see-task/:id', (req, res) => {
    const id = req.params.id;
    TasksModel.findById(id, (err: string, task: string) => {
        if (err) {
            console.error(err)
        } else {
            res.json(task);
        }
    });
});

// Update
// (Unfortunately updating is only local state, server-side persistent of DataGrid updates is available only in commercial-grade DataGridPro from MUI)
app.post('/edit-task/:id', (req, res) => {
    const id = req.params.id;
    const newTasks = {
        $set: {
            task: req.body.task,
            comments: req.body.comments,
            priority: req.body.priority,
        }
    }
    TasksModel.findByIdAndUpdate(id, newTasks, (err: string, task: string) => {
        if (err) {
            res.status(404).send(err)
        }
        else {
            res.json(task)
        }
    })
});

// Delete
app.delete('/delete-task/:id', (req, res) => {
    const id = req.params.id;
    TasksModel.findByIdAndDelete(id, (err: string) => {
        if (err) {
            return console.error(err)
        }
        else {
            res.status(200).json(`Task was deleted with id: ${id}`)
        }
    })
});

