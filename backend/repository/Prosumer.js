//Requests to have data about prosumers from database

findOne = () => {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://SimonAd:srfc@cluster0.gbrfg.mongodb.net/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        dbo.collection("prosumer").findOne({}, function(err, result) {
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
        dbo.collection("prosumer").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });

}