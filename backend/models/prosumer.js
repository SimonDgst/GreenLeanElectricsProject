const mongoose = require('mongoose');
let mongo = require ('mongodb');
const uniqueValidator = require('mongoose-unique-validator');

//creation and exportation of the prosumer model of the website

const prosumerSchema = mongoose.Schema({
    email: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    firstname: {type: String},
    lastname: {type: String},
    nb_roomies: {type: Number},
    city: {type: String}
});

prosumerSchema.plugin(uniqueValidator); //to be sure that every username is unique

module.exports = mongoose.model('Prosumer',prosumerSchema);

