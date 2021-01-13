let MongoClient = require('mongodb').MongoClient;
let url = "mongodb+srv://SimonAd:srfc@cluster0.gbrfg.mongodb.net/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("test");
    let myobj = {
        email:  "hamza.bakir@ltu.se",
        password: "mars",
        lastname: "Bakir",
        firstname: "Hamza",
        nb_roomies: 3,
        city: "Luleå" };
    
    dbo.collection("prosumers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});