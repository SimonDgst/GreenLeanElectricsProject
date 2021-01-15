//Requests to have data about speed from database

exports.findOne = () => {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://SimonAd:srfc@cluster0.gbrfg.mongodb.net/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        dbo.collection("speed").findOne({}, function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });

}

exports.findAll = () => {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://SimonAd:srfc@cluster0.gbrfg.mongodb.net/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        dbo.collection("speed").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });

}

