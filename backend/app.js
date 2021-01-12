const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const stuffRoutes = require('./routes/stuff');
//const prosumerRoutes = require('./routes/prosumer');

//We make here the connection between our app and the database

mongoose.connect('mongodb+srv://SimonAd:srfc@cluster0.gbrfg.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


//We create the express app

const app = express();

//To make our API accessible from every origin
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/stuff',stuffRoutes);
//app.use('/api/auth', prosumerRoutes);

module.exports = app; //export the app to use it on the server

