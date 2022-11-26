
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://26th_official:<$airaM261>@uni-sync.ebaobdx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  collection.createCollection("Users")
  // perform actions on the collection object
  console.log("Database created!");
  client.close();

});
