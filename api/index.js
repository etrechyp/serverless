require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const meals = require("./routes/meals");
const orders = require("./routes/orders");
const app = express();

app.use(bodyParser.json());
app.use(cors())

mongoose.connect(`mongodb+srv://etrechyp:0VlPD0JUfeAPGX7T@data.6xc9h56.mongodb.net/serverless`);

app.use("/api/meals", meals);
app.use("/api/orders", orders);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
