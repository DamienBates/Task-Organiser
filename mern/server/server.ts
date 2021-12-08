export = {}
import axios from "axios"
import CommentsModel from "./Model"

const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 5000;
const Uri = "mongodb+srv://damokevo:valorantstab32@mernapp1.4rgj6.mongodb.net/MERNapp1?retryWrites=true&w=majority";

app.use(cors());
app.use(bodyParser.json());


mongoose.connect(Uri, { useNewUrlParser: true, useUnifiedTopology: true }, (error: any) => {
    console.log(`Successfully connected to MongoDB database`)
    if (error) throw error;
});

app.listen(5000, () => {
    console.log(`You're listening on port ${PORT}`)
})

axios
app.get(('/comments'), (req: any, res: any) => {
    CommentsModel.findOne({}, (err: any, comments: any) => {
        if (err) {
            console.log(err);
        } else {
            res.json(comments);
        }
    });
});