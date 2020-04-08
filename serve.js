require('dotenv').config()
const express = require ('express');
const session = require('express-session')
const mongoose = require ('mongoose');
const request = require('request');
const cors = require('cors');
const requiredir = require('require-dir')
const bodyParser = require('body-parser')

//iniciando o app
const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(session({
    secret:process.env.SECRET,
    resave: false,
    saveUninitialized:false
}))




mongoose.set('useNewUrlParser',true)
mongoose.set('useCreateIndex',true)
mongoose.set('useUnifiedTopology', true)

//iniciando o banco de dados
mongoose.connect(
     process.env.DATABASE_URL_MONGO,
    // 'mongodb://localhost:27017/vouconstruir'
    // {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true } 
);
requiredir('./src/models');



app.use('/api', require('./src/routes'));
app.use('/app', require('./src/routes'));

 app.listen(process.env.PORT);


            
