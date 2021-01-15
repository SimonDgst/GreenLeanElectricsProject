// Check la doc pour afficher l'API dans un navigateur. Normalement à l'installation ça doit te proposer une interface
// (généralement c'est un format appelé Swagger) et à partir de cette interface tu pourras appeler les fonctions en dessous

// Code pour relier l'url souhaitée dans l'API : ex "/prosumer"
// a ta méthode findAll dans le repository
// d'abord sans paramètre
// puis teste avec une date en paramètre -> il te faut une colonne DateTime dans ta base de données

let express = require('express')
const app = require('app');

const Prosumer = require('../repository/Prosumer');

app.get('/prosumers', function (req, res) {
    let prosumers = Prosumer.findAll()
    console.log(prosumers)
    let response = prosumers // tes objets prosumer a mettre dedans -> regarde la syntaxe
    res.send(response)
})

app.get('/prosumers/{email}', function(req, res) {
    // appelle ton repository prosumer.find(email) -> regarde comment récupérer le param email dans la doc
    var response = {} // normalement ça va te renvoyer du format JSON
    res.send(response)
})
