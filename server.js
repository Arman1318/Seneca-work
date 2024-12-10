const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const Shop = require('./models/Shop');
const app = express();

const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect("mongodb+srv://george_tsang:At00las%24@mongodbatlas-gua4x.mongodb.net/mongodatabase?retryWrites=true", {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Connection error', err);
});


app.get("/", (req, res)=>{
    res.send("Working");
});


app.listen(port, (req, res)=>{
    console.log("Listening")
});