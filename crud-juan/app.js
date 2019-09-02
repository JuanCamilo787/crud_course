const db = require('./libs/db');
const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
require('colors');

const app = express();
db.connection();

const indexRoutes = require('./routes/index.js');


//settings
app.listen(3000, ()=> console.log('listening on port 3000'.blue));
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//midelwares son las funciones que sejecutan cada vez que llega una peticion al servidor

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//routes

app.use('/', indexRoutes);