require('dotenv').config(); // loads .env contents into process.env

const express = require('express');
const mongoose = require('mongoose');//possibly move DB code to db folder
const bp = require('body-parser')//package to allow reading req.body - update express to avoid this

const app = express();
const store_routes = require('./routes/storeDB_routes.js')

//Middleware
app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

//Database Connection
const mongoString = process.env.ATLAS_URI; //DB Connection String

mongoose.connect(mongoString)
const database = mongoose.connection;

database.on('error', (err) => {
    console.log(err);
})

database.once('connected', () => {
    console.log('Database Connected');
})

//API Routes for DB
app.use('/api/v1/store', store_routes);


const port = 8080;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
