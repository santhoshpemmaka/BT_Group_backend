const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const feedbackRoutes = require('./router/feedBack');
const userRoutes = require('./router/user');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/',feedbackRoutes);
app.use('/',userRoutes);

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','*');
    res.setHeader("Access-Control-Allow-Headers",'Content-Type, Authorization');
    req.next();
});

mongoose.set("strictQuery", false); // overcome deploy error
const databaseUrl = process.env.DATABASE_URL;
mongoose.connect(databaseUrl)
.then(result => {
    app.listen(8080);
})
.catch(err => {
    console.log("err",err);
})
