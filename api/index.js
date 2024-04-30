require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const meals = require("./routes/meals");
const orders = require("./routes/orders")
const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI);

app.use("/api/meals", meals);
app.use("/api/orders", orders)

module.exports = app;
