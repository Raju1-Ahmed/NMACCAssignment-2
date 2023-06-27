const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const productRoute = require('./routes/product.route');
const brandRoute = require("./routes/Brand.route");


//middleware
app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.use('/api/v1/product', productRoute)
app.use('/api/v1/brand', brandRoute)


module.exports = app;
