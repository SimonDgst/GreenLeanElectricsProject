let MongoClient = require('mongodb').MongoClient;
let url = "mongodb+srv://SimonAd:srfc@cluster0.gbrfg.mongodb.net/";

//To insert one row to a collection
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("test");
    let myobj = {
        email:  "bacher.paul@polytech.fr",
        password: "porso",
        lastname: "Bacher",
        firstname: "Paul",
        nb_roomies: 2,
        city: "Nancy" };

    dbo.collection("prosumers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});