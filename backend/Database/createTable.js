let MongoClient = require('mongodb').MongoClient;
let url = "mongodb+srv://SimonAd:srfc@cluster0.gbrfg.mongodb.net/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("test");
    dbo.createCollection("speed", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});