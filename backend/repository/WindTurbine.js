//Requests to have data about eolienn from database

findOne = () => {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://SimonAd:srfc@cluster0.gbrfg.mongodb.net/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        dbo.collection("windturbine").findOne({}, function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });

}

findAll = () => {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://SimonAd:srfc@cluster0.gbrfg.mongodb.net/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        dbo.collection("windturbine").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });

}