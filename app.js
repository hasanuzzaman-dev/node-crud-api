const express = require("express");
var cors = require("cors");
const courseRouter = require("./routes/courseHandler");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
// send json body
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send("Server Running!");
});

// creating corse route
app.use("/api/v1", courseRouter);

mongoose.connect(process.env.DB_CONNECTION_URL, () => {
    console.log("Connected DB at " + process.env.DB_CONNECTION_URL);
});

app.listen(process.env.PORT, () => {
    console.log("Server is running at port", process.env.PORT);
});
