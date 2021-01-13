let MongoClient = require('mongodb').MongoClient;
let url = "mongodb+srv://SimonAd:srfc@cluster0.gbrfg.mongodb.net/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("test");
    dbo.collection("prosumers").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result.email);
        db.close();
    });
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("test");
    dbo.collection("prosumers").find({},{projection:{_id: 0}}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});