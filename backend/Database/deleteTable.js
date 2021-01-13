let MongoClient = require('mongodb').MongoClient;
let url = "mongodb+srv://SimonAd:srfc@cluster0.gbrfg.mongodb.net/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("test");
    dbo.collection("users").drop(function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
    });
});