const express = require('express');

const app = express();
app.use(express.json())

// import Route

const product = require('./routes/productroutes')
app.use("/api/v1",product)


module.exports = app