//Requests to have data about prosumers from database

//Find one prosumer in the database
exports.findOne = () => {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://SimonAd:srfc@cluster0.gbrfg.mongodb.net/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        dbo.collection("prosumers").findOne({}, function(err, result) {
            if (err) throw err;
            console.log(result.city);
            db.close();
        });
    });

}
//Find all the prosumers in  the database

exports.findAll = () => {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://SimonAd:srfc@cluster0.gbrfg.mongodb.net/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        dbo.collection("prosumers").find({},{projection:{_id:0}}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });

}