const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
//using in-built express body-parser
app.use(express.json());

//db config
const db = process.env.NODE_ENV === 'test' ? process.env.DATABASE_URI_TEST  : process.env.DATABASE_URI;
//connect to mongo
console.log(db);

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => {})
.catch(err => {})


module.exports = app;