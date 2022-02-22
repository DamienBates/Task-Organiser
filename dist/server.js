"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const model_1 = __importDefault(require("./model"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_URI;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(express_1.default.json()); // Req as JSON
app.listen(PORT);
app.use(express_1.default.static(path_1.default.join(__dirname, 'build')));
app.get('/*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'build'));
});
// Confirm we have a good connection
mongoose_1.default.connect(URI, (error) => {
    console.log(`Successfully connected to MongoDB database on port ${PORT}`);
    if (error)
        throw error;
});
// API endpoints:
// All Tasks
app.get('/', (req, res) => {
    model_1.default.find(function (err, tasks) {
        if (err) {
            console.error(err);
        }
        else {
            res.json(tasks);
        }
    });
});
// CRUD:
// Create
app.post('/add-task', (req, res) => {
    model_1.default.create(req.body, (err, tasks) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log(tasks);
            res.json(tasks);
        }
    });
});
// Read/Edit
app.get('/see-task/:id', (req, res) => {
    const id = req.params.id;
    model_1.default.findById(id, (err, task) => {
        if (err) {
            console.error(err);
        }
        else {
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
    };
    model_1.default.findByIdAndUpdate(id, newTasks, (err, task) => {
        if (err) {
            res.status(404).send(err);
        }
        else {
            res.json(task);
        }
    });
});
// Delete
app.delete('/delete-task/:id', (req, res) => {
    const id = req.params.id;
    model_1.default.findByIdAndDelete(id, (err) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.status(200).json(`Task was deleted with id: ${id}`);
        }
    });
});
