let MongoClient = require('mongodb').MongoClient;
let url = "mongodb+srv://SimonAd:srfc@cluster0.gbrfg.mongodb.net/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("test");
    let myobj = [
        { name: 'John', address: 'Highway 71'},
        { name: 'Peter', address: 'Lowstreet 4'},
        { name: 'Amy', address: 'Apple st 652'}
    ];
    dbo.collection("customers").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
});

