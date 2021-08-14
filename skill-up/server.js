const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require('cors');
const userRoute = require("./src/routes/user");
const courseRoute = require("./src/routes/course");
require("dotenv").config();

const app = express();
const uri = 'mongodb://localhost:27017/' + "skillUp";
//const uri = process.env.MONGO_URI;
const port = 8080;

app.use(morgan("tiny"));
app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({limit: '100mb', extended: true}));
app.use(userRoute)
app.use(courseRoute)
app.use(cors());

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });


mongoose.set("useUnifiedTopology", true);

mongoose.connection.on("error", (err) => {
  console.log("err", err);
});

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});

app.listen(port, () => {
  console.log(`Running at Port ${port}`);
});