const router = require("./routes/router.tsx")

const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
const mongoString = "mongodb+srv://damokevo:valorantstab32@mernapp1.4rgj6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.use(cors());
app.use(bodyParser.json());
app.use('/comments', router)

mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (error) throw error;
    console.log(`Successfully connected to MongoDB database on port ${PORT}`)
});

