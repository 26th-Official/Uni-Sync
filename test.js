const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Sample:Qwerty123@uni-sync.ebaobdx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  obj = {}
  const collection = client.db("UniSYNC").collection("Users");
  collection.insertOne(obj)
  // perform actions on the collection object
  client.close()
});
