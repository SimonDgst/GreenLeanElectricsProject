const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//creation and exportation of the speed model of the website

const prosumerSchema = mongoose.Schema({
    value: {type: String},
    timestamp: {type: DateTime},
});

prosumerSchema.plugin(uniqueValidator); //to be sure that every username is unique

module.exports = mongoose.model('Speed',prosumerSchema);

