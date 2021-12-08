import CommentsModel from "./model"

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

// Confirm a good connection
mongoose.connect(URI, features, (error: any) => {
    console.log(`Successfully connected to MongoDB database on port ${PORT}`)
    if (error) throw error;
});

// Routes:
// All Comments
app.get('/', (req: any, res: any) => {
    CommentsModel.find(function (err: any, comments: any) {
        if (err) {
            console.error(err)
        } else {
            res.json(comments);
        }
    })
})

// CRUD:
// Create
app.route('/add-comment').post((req: any, res: any) => {
    CommentsModel.create(req.body, (err: any, comments: any) => {
        if (err) {
            console.error(err)
        } else {
            console.log(comments)
            res.json(comments)
        }
    })
})

// Read
app.get(('/user/:id'), (req: any, res: any) => {
    var id = req.params.id;
    CommentsModel.findById(id, (err: any, comments: any) => {
        if (err) {
            console.error(err)
        } else {
            res.json(comments);
        }
    });
});

// Update
app.route('/edit-comment/:id').post((req: any, res: any) => {
    var id = req.params.id;

    CommentsModel.findById(id, { $set: req.body }, (err: any, comment: any) => {
        if (!comment) res.status(404).send(err, "Comment not found");
        else res.json(comment);
    })
});

// Delete
app.route('/delete-comment/:id').delete((req: any, res: any) => {
    var id = req.params.id;

    CommentsModel.findByIdAndRemove(id, (err: any, comment: any) => {
        if (err) res.status(404).send(err, "Comment not found")
        else res.status(200).json({ msg: comment });
    })
});

