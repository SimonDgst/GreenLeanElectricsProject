const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//creation and exportation of the wind turbine model of the website

const prosumerSchema = mongoose.Schema({
    name: {type: String, required:true, unique:true},
    city: {type: String}
});

prosumerSchema.plugin(uniqueValidator); //to be sure that every username is unique

module.exports = mongoose.model('WindTurbine',prosumerSchema);

