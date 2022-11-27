// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Sample:Qwerty123@uni-sync.ebaobdx.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   obj = {}
//   const collection = client.db("UniSYNC").collection("Users");
//   collection.insertOne(obj)
//   // perform actions on the collection object
//   client.close()
// });


var axios = require('axios');
var data = JSON.stringify({
    "collection": "Users",
    "database": "UniSYNC",
    "dataSource": "Uni-SYNC",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-kcqqe/endpoint/data/v1/action/insertOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'ON7CfbL2PTB2I1RINIeWdwLgxu38aZY2g2ff21PNJZPxrFkCF8u866kAyuL8Akyx',
    },
    data: {
      "collection":"Users",
      "database":"UniSYNC",
      "dataSource":"Uni-SYNC",
      "document": {
        "text": "Hello from the Data API!",
    }
    }
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
